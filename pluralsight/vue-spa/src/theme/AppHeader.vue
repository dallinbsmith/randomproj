<template>
    <nav>
      <div class ="container">
        <router-link to="/">
          <h1>Index</h1>
        </router-link>
        <router-link to="/category/front-end">Front-end
        </router-link>
        <router-link :to="{ name: 'category', params: {id: 'mobile'}}">Mobile
        </router-link>
        <router-link to="/login">Login
        </router-link>
      </div>
    </nav>
</template>
