<template>
    <Card>
        <div style='overflow: hidden'>
            <span>Main</span>
            <p style='float: right'>
                <Button type= 'error' @click='logout'>Loginout</Button>
            </p>
            <p style='float: right; margin-right: 10px'>
                <Button type= 'warning' @click='goOwner'>Me</Button>
            </p>
        </div>
        <router-view></router-view>
    </Card>
</template>

<script>
    export default {
        methods: {
            logout(){
                this.$store.commit('logout');
                this.$router.replace({
                    name: 'login'
                })
            },
            goOwner(){
                this.$router.push({
                    name: 'owner-space',
                    params: {
                        userName: 'jss',
                        userId: 10000
                    }
                })
            }
        }
    }
</script>

<style scoped>

</style>

