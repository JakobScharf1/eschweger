<template>
<div class="container pt-15 pt-md-17 pb-13 pb-md-15">
    <div class="card bg-soft-primary">
        <div class="card-body p-12">
            <div class="row gx-md-8 gx-xl-12 gy-10">
            <div class="col-lg-6">
                <img
                src="/assets/img/icons/lineal/email.svg"
                class="icon-svg icon-svg-sm mb-4"
                alt=""
                />
                <h2 class="display-4 mb-3 pe-lg-10">
                Newsletter abonnieren
                </h2>
                <p class="lead pe-lg-12 mb-0">
                Abonnieren Sie unseren Newsletter und erhalten Sie die neuesten Informationen und Gewinnspiele direkt in Ihren Posteingang.
                </p>
            </div>
            <!-- /column -->
            <div class="col-lg-6">
                <form
                class="contact-form needs-validation"
                @submit.prevent="handleSubmit"
                >
                <div class="messages"></div>
                <div class="row gx-4">
                    <div class="col-md-6">
                        <div class="form-floating mb-4">
                            <input
                            id="frm_vorname"
                            type="text"
                            name="vorname"
                            class="form-control border-0"
                            placeholder="Erika"
                            required="required"
                            data-error="Bitte Vornamen angeben."
                            />
                            <label for="frm_vorname">Vorname *</label>
                            <div class="invalid-feedback">
                            Bitte Vornamen angeben.
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-floating mb-4">
                            <input
                            id="frm_name"
                            type="text"
                            name="name"
                            class="form-control border-0"
                            placeholder="Musterfrau"
                            required="required"
                            data-error="Bitte Nachnamen angeben."
                            />
                            <label for="frm_name">Nachname *</label>
                            <div class="invalid-feedback">
                            Bitte Nachnamen angeben.
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row gx-4">
                    <div class="col-md-12">
                        <div class="form-floating mb-4">
                            <input
                            id="frm_email"
                            type="email"
                            name="email"
                            class="form-control border-0"
                            placeholder="name@mail.de"
                            required="required"
                            data-error="Bitte gültige Email angeben."
                            />
                            <label for="frm_email">Email *</label>
                            <div class="invalid-feedback">
                            Bitte Email eingeben.
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row gx-4">
                    <div class="col-12">
                    <input
                        type="submit"
                        class="btn btn-outline-primary rounded-pill btn-send mb-3"
                        value="Abschicken"
                    />
                    </div>
                    <!-- /column -->
                </div>
                <!-- /.row -->
                </form>
                <!-- /form -->
            </div>
            <!-- /column -->
            </div>
            <!-- /.row -->
        </div>
        <!--/.card-body -->
    </div>
    <!--/.card -->
</div>
</template>

<script setup>
const handleSubmit = () => {};
</script>

<style lang="scss" scoped></style>