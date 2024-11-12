<script>
    import { onMount } from 'svelte'

    let message = ""
    let monsterElement;
    
    onMount(() => {
        // This means wait for the DOM to load before running the funciton

        let Doug = new Monster(1, "PLAYER A")
        let Simon = new Monster(1, "PLAYER B")
        Doug.target = Simon
        Simon.target = Doug

    })

    class Monster {
        static weapons = {
            stick: 2,
            knife: 4,
            "baseball bat":8,
        }
        static types = [
            "rock",         // 
            "paper",        // 
            "scissors",     // 
        ]
        static images = {
            rock: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/3ba2f338720525.576c1e374eff9.jpg",
            paper: "https://img.freepik.com/premium-photo/paper-monster-paper-style-generative-ai_566661-20266.jpg",
            scissors: "https://spaces-cdn.clipsafari.com/vg8bjd843pggbxfg7m8fzjbsymct"
        }
        static multipliers = {
            rock: {
                rock: 1,
                scissors: 1.25,
                paper: 0.75,
            },
            paper: {
                rock: 1.25,
                scissors: 0.75,
                paper: 1,
            },
            scissors: {
                rock: 0.75,
                scissors: 1,
                paper: 1.25,
            }
        }
    

        constructor(lvl, name) {
            this.lvl = lvl
            this.name = name

            this.weapon = "stick"
            this.weaponDMG = Monster.weapons[this.weapon]
            this.exp = 0
            this.expNeeded = this.lvl*10
            this.hp = this.lvl*3+10
            this.maxHp = this.lvl*3+10
            this.money = 0
            this.dmg = this.lvl + this.weaponDMG
            this.type = Monster.types[Math.floor(Math.random()*3)]
            this.defence = 0

            this.createMonsterElement()        
        }

        displayMessage(msg) {
            message = `
                <div class="message" style="color:red">
                    ${msg}
                </div>
            `
        }
        
        createMonsterElement() {
            // main element
            this.monsterElement = document.createElement('div')
            this.monsterElement.classList = "monster"

            // meter
            this.meter = document.createElement('meter')
            this.meter.value = this.hp
            this.meter.max = this.maxHp
            this.meter.min = 0

            // fight button
            this.fightButton = document.createElement('button')
            this.fightButton.innerText = 'fight'
            this.fightButton.disabled = false
            this.fightButton.addEventListener('click', () => {
                this.attack(this.target)
            })

            this.defendButton = document.createElement('button')
            this.defendButton.innerText = 'defend'
            this.defendButton.disabled = false
            this.defendButton.addEventListener('click', () => {
                this.defend()
            })

            // stats element
            this.statsElement = document.createElement('div')

            // image element

            // append elements
            monsterElement.append(this.monsterElement)


            this.monsterElement.innerHTML += `<h2>${this.name}</h2>`
            this.monsterElement.append(this.meter)
            this.monsterElement.append(this.fightButton)
            this.monsterElement.append(this.statsElement)
            this.monsterElement.append(this.defendButton)
            this.updateStats()
        }

        // a getter is like a property disguised as a method
        // when we reference this.totalDMG, the method is secretly being called and returning the return value
        get totalDMG() {
            //                                         in case the target doesn't exist yet, defaults to 1
            let multiplier = Monster.multipliers[this.type][this.target?.type] || 1
            return (this.dmg + this.weaponDMG) * multiplier
        }
        
        attack() {
            let opponent = this.target
            if(opponent.defence > this.totalDMG) {
                opponent.hp -= 1
                opponent.meter.value -= 1
            }
            else {
                opponent.hp -=  this.totalDMG
                opponent.hp += opponent.defence
                opponent.meter.value -=  this.totalDMG
                opponent.meter.value += opponent.defence
            }
            // display text
            this.displayMessage(`${this.name} attacked ${opponent.name} with a ${this.weapon}`)
            this.displayMessage(`${opponent.name} is now at ${opponent.hp} HP`)

            // handle buttons
            this.fightButton.disabled = true
            this.defendButton.disabled = true
            opponent.fightButton.disabled = false
            opponent.defendButton.disabled = false
            
            // handle fainting
            if(opponent.hp<1) {
                this.displayMessage(`${opponent.name} has fainted`)
                opponent.hp = opponent.maxHp
                this.displayMessage(`${this.name} has gained ${opponent.lvl*2} Exp`)
                opponent.meter.value = this.maxHp
                this.exp+=opponent.lvl*3
                // handle leveling up
                if(this.exp > this.expNeeded) {
                    this.lvl+=1

                    this.dmg+=1
                    this.maxHp+=3
                    this.hp = this.maxHp
                    this.meter.max = this.maxHp
                    this.meter.value = this.maxHp
                    this.exp = 0
                    this.money += opponent.lvl*2
                    this.expNeeded = this.lvl*10
                }
            }
            this.updateStats()
            opponent.updateStats()
        }

        defend() {
            this.defence+=this.dmg/2
            this.fightButton.disabled = true
            this.defendButton.disabled = true
            this.target.fightButton.disabled = false
            this.target.defendButton.disabled = false
            this.updateStats()

        }

        updateStats() {
            this.statsElement.innerHTML = `
                <table border="1">
                    <tr>
                        <td>Type</td>
                        <td>${this.type}</td>
                    </tr>
                    <tr>
                        <td>Level</td>
                        <td>${this.lvl}</td>
                    </tr>
                    <tr>
                        <td>Exp</td>
                        <td>${this.exp}</td>
                    </tr>
                    <tr>
                        <td>Exp needed</td>
                        <td>${this.expNeeded}</td>
                    </tr>
                    <tr>
                        <td>Total Damage</td>
                        <td>${ this.totalDMG}</td>
                    </tr>
                    <tr>
                        <td>Defence</td>
                        <td>${this.defence}</td>
                    </tr>
                    <tr>
                        <td>HP</td>
                        <td>${this.hp}</td>
                    </tr>
                </table>
            `
        }

        switch(newWeapon) {
            // Handle invalid weapon
            let weapons = Object.keys(Monster.weapons)
            if (!weapons.includes(newWeapon)) {
                displayMessage("weapon does not exist")
                return
            }
            if(this.money>9) {
            // Handle valid weapon
            this.money -= 10
            this.weaponDMG = Monster.weapons[newWeapon]
            this.weapon = newWeapon
            }
            else{
                displayMessage("not enough money")
            }

        }

        
    }
</script>

<div id="monsters" bind:this={monsterElement}></div>
<div id="text">
    {@html message}
</div>