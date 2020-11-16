<template>
    <main class="sites">
        <page-title title="Create User">
            <nav
                class="breadcrumb has-arrow-separator"
                aria-label="breadcrumbs"
            >
                <ul>
                    <li>
                        <router-link :to="{ name: 'users.manage' }">
                            Users
                        </router-link>
                    </li>
                    <li class="is-active">
                        <a href="#" aria-current="page">Create User</a>
                    </li>
                </ul>
            </nav>
        </page-title>

        <section class="section">
            <div class="container">
                <user-form />
            </div>
        </section>
    </main>
</template>

<script>
import UserForm from '~/components/forms/user-form';

export default {
    components: {
        UserForm,
    },
};
</script>
