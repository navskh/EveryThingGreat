<template>
  <div class="max-w-[1500px] m-auto">
    <div class="navbar bg-base-100">
      <div class="flex-1">
        <router-link to="/" class="font-bold uppercase text-5xl text-primary"
          >EGCI</router-link
        >
        <p font-family="" class="subpixel-antialiased ml-2 text-secondary">
          Everything Great<br />
          Comes from Innerstillness
        </p>
      </div>
      <div class="flex-none gap-2">
        <div class="form-control">
          <input
            type="text"
            placeholder="Search"
            class="input input-bordered"
          />
        </div>
        <div class="dropdown dropdown-end">
          <label tabindex="0" class="btn btn-ghost btn-circle avatar">
            <div class="w-10 rounded-full">
              <img src="https://placeimg.com/80/80/people" />
            </div>
          </label>
          <ul
            tabindex="0"
            class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a class="justify-between">
                Profile
                <span class="badge">New</span>
              </a>
            </li>
            <li><a>Settings</a></li>
            <li><a>Logout</a></li>
          </ul>
        </div>
        <theme-vue></theme-vue>
      </div>
    </div>
  </div>
</template>

<script setup>
import ThemeVue from "@/components/units/Theme.vue";
</script>

<style lang="scss" scoped></style>
