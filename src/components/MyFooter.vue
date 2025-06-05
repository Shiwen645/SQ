<template>
  <div class="footer">
    <div class="footer-content">
      <p>© 2025 WSL的小站 - 隔离天日</p>
      <div class="contact-icons">
        <img
          v-for="(contact, index) in contacts"
          :key="index"
          :src="contact.icon"
          alt=""
          class="footer-icon"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyFooter",
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
.footer {
  padding: 20px 0;
  color: #fff;
  text-align: center;
}

.footer-content {
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.contact-icons {
  margin-top: 10px;
  display: flex;
  gap: 15px;
}

.footer-icon {
  width: 24px;
  height: 24px;
  cursor: pointer;
  transition: transform 0.3s;
}

.footer-icon:hover {
  transform: scale(1.2);
}
</style>
