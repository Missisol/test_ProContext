<template>
    <div>
      <h3>Filters</h3>
        <b-form-group id="input-group-1" label="Your Name:" label-for="input-2">
            <b-form-input id="input-1" v-model="name" required placeholder="Enter name"></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
            <b-form-input id="input-2" v-model="name" required placeholder="Enter name"></b-form-input>
        </b-form-group>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: ""
        };
    }
};
</script>

<style lang="scss" scoped>
</style>