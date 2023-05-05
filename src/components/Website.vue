<template>
  <!-- loader  -->
  <div class="loader_bg">
    <div class="loader"><img src="images/loading.gif" alt="#" /></div>
  </div>
  <!-- end loader -->
  <!-- header -->
  <header>
    <!-- header inner -->
    <div
      class="header"
      :style="{ backgroundColor: colorStore.colors[0].value }"
    >
      <div
        class="white_bg"
        :style="{ backgroundColor: colorStore.colors[0].value }"
      >
        <div class="container-fluid">
          <div class="row">
            <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
              <div class="full">
                <div class="center-desk">
                  <div class="logo"></div>
                </div>
              </div>
            </div>
            <div class="col-xl-9 col-lg-9 col-md-9 col-sm-9">
              <nav class="navigation navbar navbar-expand-md navbar-dark">
                <button
                  class="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarsExample04"
                  aria-controls="navbarsExample04"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarsExample04">
                  <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                      <a class="nav-link" href="index.html"> Home </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">About</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">Services </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">News</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">Contact Us</a>
                    </li>
                    <li class="nav-item d_none le_co">
                      <a class="nav-link" href="#"
                        ><i class="fa fa-user" aria-hidden="true"></i> Login</a
                      >
                    </li>
                    <li class="nav-item d_none le_co">
                      <a class="nav-link" href="#"
                        ><i class="fa fa-search" aria-hidden="true"></i
                      ></a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
        <!-- end header inner -->
        <!-- end header -->
        <!-- banner -->
        <section class="banner_main">
          <div id="banner1" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
              <li data-target="#banner1" data-slide-to="0" class="active"></li>
              <li data-target="#banner1" data-slide-to="1"></li>
              <li data-target="#banner1" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="container-fluid">
                  <div class="carousel-caption">
                    <div class="row">
                      <div class="col-md-12 col-lg-7">
                        <div class="text-bg">
                          <span :style="{ color: colorStore.colors[2].value }"
                            >Progress & Success</span
                          >
                          <h1 :style="{ color: colorStore.colors[2].value }">
                            c u r r e n c y
                          </h1>
                          <p
                            :style="{
                              color: '#fff',
                            }"
                          >
                            It is a long established fact that a reader will be
                            distracted by the readable It is a long established
                            fact that a reader will be distracted by the
                            readable
                          </p>
                        </div>
                      </div>
                      <div class="col-md-12 col-lg-5">
                        <div class="text_img">
                          <figure>
                            <img src="images/ban_img.png" alt="#" />
                          </figure>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </header>
  <!-- end banner -->
  <!-- about section -->
  <div class="about" :style="{ backgroundColor: colorStore.colors[2].value }">
    <div class="container">
      <div class="row d_flex">
        <div class="col-md-12 col-lg-5">
          <div class="about_img">
            <figure><img src="images/about.png" alt="#" /></figure>
          </div>
        </div>
        <div class="col-md-12 col-lg-7">
          <div class="titlepage">
            <h2 :style="{ color: colorStore.colors[0].value }">
              <span
                class="yellow"
                :style="{ color: colorStore.colors[0].value }"
                >ABOUT US</span
              ><br />Welcome TO OUR DEGITALEX
            </h2>
            <p :style="{ color: '#fff' }">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- about section -->
  <!-- services section -->
  <div
    class="services"
    :style="{ backgroundColor: colorStore.colors[0].value }"
  >
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="titlepage">
            <h2 :style="{ color: colorStore.colors[3].value }">
              <span
                class="yellow"
                :style="{ color: colorStore.colors[3].value }"
                >Services</span
              ><br />consectetur adipiscing elit
            </h2>
          </div>
        </div>
        <div class="col-md-3 col-sm-6">
          <div id="ho_color" class="services_main">
            <i><img src="images/services_icon1.png" alt="#" /></i>
            <img class="ho" src="images/services_icon1h.png" alt="#" />
            <h3>Safe & Secure</h3>
            <p>ncididunt ut labore et dolore magna aliqua. Ut enim</p>
            <a class="read_more" href="#">Read More</a>
          </div>
        </div>
        <div class="col-md-3 col-sm-6">
          <div id="ho_color" class="services_main">
            <i><img src="images/services_icon2.png" alt="#" /></i>
            <img class="ho" src="images/services_icon2h.png" alt="#" />
            <h3>Mobile Apps</h3>
            <p>ncididunt ut labore et dolore magna aliqua. Ut enim</p>
            <a class="read_more" href="#">Read More</a>
          </div>
        </div>
        <div class="col-md-3 col-sm-6">
          <div id="ho_color" class="services_main">
            <i><img src="images/services_icon3.png" alt="#" /></i>
            <img class="ho" src="images/services_icon3h.png" alt="#" />
            <h3>Wallet</h3>
            <p>ncididunt ut labore et dolore magna aliqua. Ut enim</p>
            <a class="read_more" href="#">Read More</a>
          </div>
        </div>
        <div class="col-md-3 col-sm-6">
          <div id="ho_color" class="services_main">
            <i><img src="images/services_icon4.png" alt="#" /></i>
            <img class="ho" src="images/services_icon4h.png" alt="#" />
            <h3>Experts Support</h3>
            <p>ncididunt ut labore et dolore magna aliqua. Ut enim</p>
            <a class="read_more" href="#">Read More</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- end services section -->
  <!-- bitcoins section -->
</template>

<script setup>
import { useColor } from "../stores/colors.js";
const colorStore = useColor();
</script>

<style lang="scss" scoped></style>
