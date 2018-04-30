<template>
    <md-list-item>
        <md-avatar>
          <img src="https://placeimg.com/40/40/people/1" alt="People">
        </md-avatar>

        <div class="md-list-item-text">
          <span>Ali Connors</span>
          <span>{{postModel.message}}</span>
          <p>{{postModel.timestamp | time_ago}}</p>
        </div>
    </md-list-item>
</template>

<script>

export default {
  props: ['postModel']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
