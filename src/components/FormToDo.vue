
<template>
    <form>
        <div class="form-group">
            <p>
                <input v-model="fields.bookPublisher" type="text" placeholder="Editora" class="form-control">
            </p>
        </div>
        <div class="form-group">
            <p>
                <input v-model="fields.title" type="text" placeholder="Titulo" class="form-control">
            </p>
        </div>
        <div class="form-group">
            <p>
                <input v-model="fields.pages" type="number" placeholder="Páginas" class="form-control">
            </p>
        </div>
        <div class="form-group">
            <p>
                <textarea v-model="fields.comments" placeholder="Comentários" class="form-control"></textarea>
            </p>
        </div>
            <button v-on:click="submit" type="submit" class="btn btn-primary">Criar</button>
    </form>
</template>

<script>
export default {
    name: "FormToDo",
    data(){
        return{
            fields: {
                bookPublisher: '',
                title: '',
                pages: '',
                comments: ''
            }
        }
    },
    methods :{
        submit(){
            this.$emit("emit-comment", {bookPublisher: this.fields.bookPublisher, title: this.fields.title, pages: this.fields.pages, comments: this.fields.comments});
            this.fields = {};
        }
    },
    updated(){
        event.preventDefault();
    }
}
</script>