<template>
    <v-app id="keep">
        <v-navigation-drawer
                v-model="drawer"
                fixed
                clipped
                class="grey lighten-4"
                app
        >
            <v-list
                    dense
                    class="grey lighten-4"
            >
                <template v-for="(item, i) in items">
                    <v-layout
                            v-if="item.heading"
                            :key="i"
                            row
                            align-center
                    >
                        <v-flex xs6>
                            <v-subheader v-if="item.heading">
                                {{ item.heading }}
                            </v-subheader>
                        </v-flex>
                        <v-flex xs6 class="text-xs-right">
                            <v-btn small flat>edit</v-btn>
                        </v-flex>
                    </v-layout>
                    <v-divider
                            v-else-if="item.divider"
                            :key="i"
                            dark
                            class="my-3"
                    ></v-divider>
                    <v-list-tile
                            v-else
                            :key="i"
                            :to="item.path"
                    >
                        <v-list-tile-action>
                            <v-icon>{{ item.icon }}</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title class="black--text">
                                {{ item.text }}
                            </v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </template>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar app absolute clipped-left>
            <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
            <span class="title ml-3 mr-5">Dashboard Moderator</span>
        </v-toolbar>
        <v-content>
            <router-view></router-view>
        </v-content>
    </v-app>
</template>

<script>
    export default {
        data: () => ({
            drawer: null,
            items: [
                { icon: 'lightbulb_outline', text: 'Notes', path: '/recipe' },
                { icon: 'touch_app', text: 'Reminders', path: '/recipe' },
                { divider: true },
                { icon: 'add', text: 'Create new Recipe', path: '/recipe' },
                { divider: true },
                { icon: 'archive', text: 'Archive', path: '/recipe' },
                { icon: 'delete', text: 'Trash', path: '/recipe' },
                { divider: true },
                { icon: 'settings', text: 'Settings', path: '/recipe' },
                { icon: 'chat_bubble', text: 'Trash', path: '/recipe' },
                { icon: 'help', text: 'Help' },
                { icon: 'phonelink', text: 'App downloads', path: '/recipe' },
                { icon: 'keyboard', text: 'Keyboard shortcuts', path: '/recipe' }
            ]
        }),
        props: {
            source: String
        }
    }
</script>

<style scoped>

</style>
