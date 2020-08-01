<template>
  <footer class="footer">
    <div class="footer__links">
      <a class="footer__link" href="https://www.laurenashpole.com">
        <span>Visit my site</span>
        <svg viewBox="0 0 106 49">
          <path
            d="M56.35 1.5c-1.7.7-4.6 3.15-6.4 5.4-4.15 5.15-9 6.75-15.8 5.1-10.6-2.6-10.8-2.6-9 .1 1.85 2.85 6.8 4.75 12.3 4.85l4 .05-5.95 6-5.95 6h-6.3C12.55 29 1 36.25 1 42.95c0 7.95 9.7 6.95 21.9-2.35 2.95-2.25 5.95-4.55 6.7-5.05 2.1-1.55 22.65 4.9 28.6 9 7.3 5 17.7 4.45 24-1.25 1.65-1.5 1.95-1.45 3.9.3 3.25 2.95 15 2.75 18.1-.35 3-3 1.2-5.2-2.7-3.4-6.3 2.85-14.5.35-14.5-4.4 0-3.85-2.7-3-7.85 2.55-5.85 6.3-9.4 7.45-15.05 4.95-5.4-2.45-5.25-2.85 2.65-6.95C73.95 32.3 85 22.45 85 19.75c0-1.75-4.15-5.05-7.8-6.2-5.2-1.6-21.1 9.45-24.7 17.2-1 2.05-1.9 3.9-2.05 4.1C50 35.35 36 30.7 36 30.05c0-.7 12.35-12.9 19.75-19.6 7.1-6.35 7.45-11.85.6-8.95zm21.5 16.8c2.8 3.4-9.05 13.9-19 16.75-4.25 1.2-3.65-.9 1.9-7.1 7.5-8.35 14.75-12.45 17.1-9.65zm-53.9 15.45c0 .9-7.05 6.25-12.2 9.25-6.25 3.65-6.5-.1-.35-5.7 4.5-4 12.7-6.35 12.55-3.55z"
            fill="currentColor"
          ></path>
        </svg>
      </a>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter'
};
</script>

<style scoped>
.footer {
  background: #f2f3f7;
  margin-top: 2rem;
  padding: 1rem 0.8rem;
  text-align: right;
  position: relative;
}

.footer:before {
  content: '';
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40'%3E%3Cstyle%3E.st0%7Bfill:none;stroke:%23e7e8eB;stroke-miterlimit:10%7D%3C/style%3E%3Cpath class='st0' d='M9.5 20h21M20 30.5v-21'/%3E%3C/svg%3E");
  background-size: 31px;
  height: 100%;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 2.25rem;
  z-index: -1;
}

.footer__link {
  display: inline-flex;
  align-items: center;
  text-decoration: none;
}

.footer__link span {
  margin-right: 0.95rem;
  border-right: 1px solid #3ba676;
  padding: 0.25rem 1rem 0.25rem 0;
  font-size: 0.85rem;
  font-weight: 400;
  letter-spacing: 0.075em;
}

.footer__link:hover span {
  border-color: #2e815b;
}

.footer__link svg {
  width: 65px;
  height: 30px;
}

@media (min-width: 768px) {
  .footer {
    margin-top: 2rem;
    padding: 1.6rem;
  }

  .footer:before {
    left: calc(1.6rem - 8px);
    bottom: 3.15rem;
    background-position: top left;
  }

  .footer__links {
    max-width: 1100px;
    margin: 0 auto;
  }
}

@media (min-width: 1024px) {
  .footer {
    margin-top: 5rem;
  }

  .footer:before {
    bottom: 4.15rem;
  }
}

@media (min-width: 1164px) {
  .footer:before {
    left: calc((100% - (1116px + 1.6rem)) / 2);
  }
}
</style>
