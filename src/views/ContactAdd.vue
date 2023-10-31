<template>
    <div v-if="contact" class="page">
        <h4>Thêm Một Liên hệ</h4>
        <ContactForm :contact="contact" @submit:contact="addContact" />
        <p>{{ message }}</p>
    </div>
</template>

<script>
import ContactForm from "@/components/ContactForm.vue";
import ContactService from "@/services/contact.service";
export default {
    components: {
        ContactForm,
    },
    props: {
        id: {
            type: String,
            required: true
        },
    },
    data() {
        return {
            contact: null,
            message: "",
        };
    },
    methods: {
        async getContact() {
            try {
                this.contact = await {
                    name: "",
                    email: "",
                    address: "",
                    phone: "",
                    favorite: false
                }
            } catch (error) {
                console.log(error);
                this.$router.push({
                    name: "notfound",
                    params: {
                        pathMatch: this.$route.path.split("/").slice(1)
                    },
                    query: this.$route.query,
                    hash: this.$route.hash,
                });
            }
        },
        async addContact(data) {
            try {
                await ContactService.create(data);
                this.message = "Liên hệ được thêm thành công.";
            } catch (error) {
                console.log(error);
            }
        },
    },
    created() {
        this.getContact();
        this.message = "";
    },
};

</script>

