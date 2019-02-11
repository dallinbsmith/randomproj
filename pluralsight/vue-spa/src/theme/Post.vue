<template>
            <div class="card">
              <div class="card-content">
                <slot name ="title"></slot>
                <slot name ="content"></slot>
                </div>
                <footer>
                  <a :href="link" target="_blank">
                    <h2>Read More</h2>
                  </a>
                </footer>
            </div>
</template>
<script>
  export default{
    props:['link']
  }
</script>
