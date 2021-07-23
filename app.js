const app = new Vue({
    el: '#game',
    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100,
        }
    },
    methods: {
        playerAttact() {
            // player atk dmg between 5-15
            // monster will atk back with atk dmg between 8-18
            const playeratkDmg = Math.floor(Math.random() * (15 - 5)) + 5;
            this.monsterHealth -= playeratkDmg
            this.monsterAttack();
            console.log(this.playerHealth, this.monsterHealth)

        },
        monsterAttack() {
            // monster attck back when player attck, atk dmg between 18-8
            const monsteratkDmg = Math.floor(Math.random() * (18 - 8)) + 8;
            this.playerHealth -= monsteratkDmg;
        }
    }
})