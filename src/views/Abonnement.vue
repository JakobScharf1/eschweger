<template>
  <div
    class="pricing-wrapper position-relative pb-12 pb-md-15 bg-gray"
  >
    <div
      class="shape bg-dot primary rellax w-16 h-18"
      data-rellax-speed="1"
      style="top: 2rem; right: -2.4rem"
    ></div>
    <div
      class="shape rounded-circle bg-line red rellax w-18 h-18 d-none d-lg-block"
      data-rellax-speed="1"
      style="bottom: 0.5rem; left: -2.5rem"
    ></div>
    
    <div class="container">
        <div class="row pt-7 pt-md-10 text-center">
            <div class="col-12">
                <h2>Abonnements</h2>
            </div>
        </div>
      <div class="row gy-6 pt-3 pt-md-5 justify-content-center">
        <div class="col-12 col-lg-6">
          <div class="pricing card text-center shadow-sm">
            <div class="card-body px-4 px-md-5 py-5">
              <h4 class="card-title">Jahres-Abo</h4>
              <div class="prices text-dark">
                <div class="price price-show justify-content-center">
                  <span class="price-currency">€</span>
                  <span class="price-value">46,80</span>
                  <span class="price-duration">Jahr</span>
                </div>
              </div>
              <!--/.prices -->
              <ul class="icon-list bullet-bg bullet-soft-primary mt-7 mb-8 text-start">
                <li>
                  <i class="uil uil-check"></i>
                  <span><strong>12</strong> Ausgaben</span>
                </li>
                <li>
                  <i class="uil uil-check"></i>
                  <span>Keine automatische Verlängerung</span>
                </li>
                <li>
                  <i class="uil uil-check"></i>
                  <span>Rechtzeitige Information über Verlängerung bei Bedarf</span>
                </li>
              </ul>
              <a href="https://wannefredder.sumupstore.com/" target="_blank" class="btn btn-primary rounded-pill">Zum Shop</a>
            </div>
            <!--/.card-body -->
          </div>
          <!--/.pricing -->
        </div>
        <div class="col-12 col-lg-6">
          <div class="pricing card text-center shadow-sm">
            <div class="card-body px-4 px-md-5 py-5">
              <h4 class="card-title">Halbjahres-Abo</h4>
              <div class="prices text-dark">
                <div class="price price-show justify-content-center">
                  <span class="price-currency">€</span>
                  <span class="price-value">23,40</span>
                  <span class="price-duration">6 Monate</span>
                </div>
              </div>
              <!--/.prices -->
              <ul class="icon-list bullet-bg bullet-soft-primary mt-7 mb-8 text-start">
                <li>
                  <i class="uil uil-check"></i>
                  <span><strong>6</strong> Ausgaben</span>
                </li>
                <li>
                  <i class="uil uil-check"></i>
                  <span>Keine automatische Verlängerung</span>
                </li>
                <li>
                  <i class="uil uil-check"></i>
                  <span>Rechtzeitige Information über Verlängerung bei Bedarf</span>
                </li>
              </ul>
              <a href="https://wannefredder.sumupstore.com/" target="_blank" class="btn btn-primary rounded-pill">Zum Shop</a>
            </div>
            <!--/.card-body -->
          </div>
          <!--/.pricing -->
        </div>
        <!--/column -->
      </div>
    </div>
    <!--/.row -->
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.pricing {
  border: none;
  overflow: hidden;
  border-radius: 2rem;
}

.pricing .card-body {
  padding: 3rem 1.5rem;
}

.pricing .price {
  display: flex;
  justify-content: center;
  align-items: baseline;
  gap: 0.35rem;
  margin-bottom: 1.5rem;
}

.pricing .price-currency {
  font-size: 1.1rem;
  font-weight: 600;
}

.pricing .price-value {
  font-size: 3.5rem;
  font-weight: 700;
  line-height: 1;
}

.pricing .price-duration {
  font-size: 1rem;
  color: #60697b;
}

.icon-list {
  padding-left: 0;
  margin-bottom: 2rem;
}

.icon-list li {
  display: flex;
  align-items: center;
  gap: 0.85rem;
  margin-bottom: 1rem;
}

.icon-list li i {
  margin-top: 0;
  line-height: 1;
  font-size: 1.1rem;
}

@media (max-width: 991px) {
  .pricing-wrapper {
    margin-top: 2rem !important;
    margin-bottom: 2rem !important;
  }

  .pricing .card-body {
    padding: 2rem 1.25rem;
  }

  .pricing .price-value {
    font-size: 2.5rem;
  }
}
</style>
