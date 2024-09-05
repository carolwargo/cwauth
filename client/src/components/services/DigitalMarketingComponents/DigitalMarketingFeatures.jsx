import React from "react";
import ContactForm from '../../forms/ContactForm'
import MarketingMetrics from "../../../assets/images/MarketingMetrics.png";
import ButtonBG from "../../../assets/images/ButtonBG.png";
import './digital-marketing.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const DigitalMarketingFeatures = () => {
    return (
      <div>
        <style>
          {`
         
      @media (min-width: 768px) {
        .bd-placeholder-img-lg {
          font-size: 3.5rem;
        }
      }

      .icon-link {
            
            color: #000;
            text-decoration: underline;
            font-size: 1rem;
            

      .b-example-divider {
        width: 100%;
        height: 3rem;
        background-color: rgba(0, 0, 0, .1);
        border: solid rgba(0, 0, 0, .15);
        border-width: 1px 0;
        box-shadow: inset 0 .5em 1.5em rgba(0, 0, 0, .1), inset 0 .125em .5em rgba(0, 0, 0, .15);
      }

      .b-example-vr {
        flex-shrink: 0;
        width: 1.5rem;
        height: 100vh;
      }

      .bi {
        vertical-align: -.125em;
        fill: currentColor;
      }

      .nav-scroller {
        position: relative;
        z-index: 2;
        height: 2.75rem;
        overflow-y: hidden;
      }

      .nav-scroller .nav {
        display: flex;
        flex-wrap: nowrap;
        padding-bottom: 1rem;
        margin-top: -1px;
        overflow-x: auto;
        text-align: center;
        white-space: nowrap;
        -webkit-overflow-scrolling: touch;
      }

      .btn-bd-primary {
        --bd-violet-bg: #712cf9;
        --bd-violet-rgb: 112.520718, 44.062154, 249.437846;

        --bs-btn-font-weight: 600;
        --bs-btn-color: var(--bs-white);
        --bs-btn-bg: var(--bd-violet-bg);
        --bs-btn-border-color: var(--bd-violet-bg);
        --bs-btn-hover-color: var(--bs-white);
        --bs-btn-hover-bg: #6528e0;
        --bs-btn-hover-border-color: #6528e0;
        --bs-btn-focus-shadow-rgb: var(--bd-violet-rgb);
        --bs-btn-active-color: var(--bs-btn-hover-color);
        --bs-btn-active-bg: #5a23c8;
        --bs-btn-active-border-color: #5a23c8;
      }

        `}
        </style>

        <svg xmlns="http://www.w3.org/2000/svg" className="d-none">
      <symbol id="check2" viewBox="0 0 16 16">
        <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
      </symbol>
      <symbol id="circle-half" viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 0 8 1v14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z"/>
      </symbol>
      <symbol id="moon-stars-fill" viewBox="0 0 16 16">
        <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"/>
        <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"/>
      </symbol>
      <symbol id="sun-fill" viewBox="0 0 16 16">
        <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
      </symbol>
    </svg>
 
    <svg xmlns="http://www.w3.org/2000/svg" className="d-none">
  <symbol id="bootstrap" viewBox="0 0 118 94">
   
    <path fillRule="evenodd" clipRule="evenodd" d="M24.509 0c-6.733 0-11.715 5.893-11.492 12.284.214 6.14-.064 14.092-2.066 20.577C8.943 39.365 5.547 43.485 0 44.014v5.972c5.547.529 8.943 4.649 10.951 11.153 2.002 6.485 2.28 14.437 2.066 20.577C12.794 88.106 17.776 94 24.51 94H93.5c6.733 0 11.714-5.893 11.491-12.284-.214-6.14.064-14.092 2.066-20.577 2.009-6.504 5.396-10.624 10.943-11.153v-5.972c-5.547-.529-8.934-4.649-10.943-11.153-2.002-6.484-2.28-14.437-2.066-20.577C105.214 5.894 100.233 0 93.5 0H24.508zM80 57.863C80 66.663 73.436 72 62.543 72H44a2 2 0 01-2-2V24a2 2 0 012-2h18.437c9.083 0 15.044 4.92 15.044 12.474 0 5.302-4.01 10.049-9.119 10.88v.277C75.317 46.394 80 51.21 80 57.863zM60.521 28.34H49.948v14.934h8.905c6.884 0 10.68-2.772 10.68-7.727 0-4.643-3.264-7.207-9.012-7.207zM49.948 49.2v16.458H60.91c7.167 0 10.964-2.876 10.964-8.281 0-5.406-3.903-8.178-11.425-8.178H49.948z"></path>
  </symbol>
  <symbol id="home" viewBox="0 0 16 16">
    <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z"/>
  </symbol>
  <symbol id="speedometer2" viewBox="0 0 16 16">
    <path d="M8 4a.5.5 0 0 1 .5.5V6a.5.5 0 0 1-1 0V4.5A.5.5 0 0 1 8 4zM3.732 5.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707zM2 10a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 10zm9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5zm.754-4.246a.389.389 0 0 0-.527-.02L7.547 9.31a.91.91 0 1 0 1.302 1.258l3.434-4.297a.389.389 0 0 0-.029-.518z"/>
    <path fillRule="evenodd" d="M0 10a8 8 0 1 1 15.547 2.661c-.442 1.253-1.845 1.602-2.932 1.25C11.309 13.488 9.475 13 8 13c-1.474 0-3.31.488-4.615.911-1.087.352-2.49.003-2.932-1.25A7.988 7.988 0 0 1 0 10zm8-7a7 7 0 0 0-6.603 9.329c.203.575.923.876 1.68.63C4.397 12.533 6.358 12 8 12s3.604.532 4.923.96c.757.245 1.477-.056 1.68-.631A7 7 0 0 0 8 3z"/>
  </symbol>
  <symbol id="table" viewBox="0 0 16 16">
    <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm15 2h-4v3h4V4zm0 4h-4v3h4V8zm0 4h-4v3h3a1 1 0 0 0 1-1v-2zm-5 3v-3H6v3h4zm-5 0v-3H1v2a1 1 0 0 0 1 1h3zm-4-4h4V8H1v3zm0-4h4V4H1v3zm5-3v3h4V4H6zm4 4H6v3h4V8z"/>
  </symbol>
  <symbol id="people-circle" viewBox="0 0 16 16">
    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
    <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
  </symbol>
  <symbol id="collection" viewBox="0 0 16 16">
    <path d="M2.5 3.5a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-11zm2-2a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1h-7zM0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6v7zm1.5.5A.5.5 0 0 1 1 13V6a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-13z"/>
  </symbol>
  <symbol id="calendar3" viewBox="0 0 16 16">
    <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z"/>
    <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
  </symbol>
  <symbol id="cpu-fill" viewBox="0 0 16 16">
    <path d="M6.5 6a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z"/>
    <path d="M5.5.5a.5.5 0 0 0-1 0V2A2.5 2.5 0 0 0 2 4.5H.5a.5.5 0 0 0 0 1H2v1H.5a.5.5 0 0 0 0 1H2v1H.5a.5.5 0 0 0 0 1H2v1H.5a.5.5 0 0 0 0 1H2A2.5 2.5 0 0 0 4.5 14v1.5a.5.5 0 0 0 1 0V14h1v1.5a.5.5 0 0 0 1 0V14h1v1.5a.5.5 0 0 0 1 0V14h1v1.5a.5.5 0 0 0 1 0V14a2.5 2.5 0 0 0 2.5-2.5h1.5a.5.5 0 0 0 0-1H14v-1h1.5a.5.5 0 0 0 0-1H14v-1h1.5a.5.5 0 0 0 0-1H14v-1h1.5a.5.5 0 0 0 0-1H14A2.5 2.5 0 0 0 11.5 2V.5a.5.5 0 0 0-1 0V2h-1V.5a.5.5 0 0 0-1 0V2h-1V.5a.5.5 0 0 0-1 0V2h-1V.5zm1 4.5h3A1.5 1.5 0 0 1 11 6.5v3A1.5 1.5 0 0 1 9.5 11h-3A1.5 1.5 0 0 1 5 9.5v-3A1.5 1.5 0 0 1 6.5 5z"/>
  </symbol>
  <symbol id="gear-fill" viewBox="0 0 16 16">
    <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"/>
  </symbol>
  <symbol id="speedometer" viewBox="0 0 16 16">
    <path d="M8 2a.5.5 0 0 1 .5.5V4a.5.5 0 0 1-1 0V2.5A.5.5 0 0 1 8 2zM3.732 3.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707zM2 8a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8zm9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5zm.754-4.246a.389.389 0 0 0-.527-.02L7.547 7.31A.91.91 0 1 0 8.85 8.569l3.434-4.297a.389.389 0 0 0-.029-.518z"/>
    <path fillRule="evenodd" d="M6.664 15.889A8 8 0 1 1 9.336.11a8 8 0 0 1-2.672 15.78zm-4.665-4.283A11.945 11.945 0 0 1 8 10c2.186 0 4.236.585 6.001 1.606a7 7 0 1 0-12.002 0z"/>
  </symbol>
  <symbol id="toggles2" viewBox="0 0 16 16">
    <path d="M9.465 10H12a2 2 0 1 1 0 4H9.465c.34-.588.535-1.271.535-2 0-.729-.195-1.412-.535-2z"/>
    <path d="M6 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 1a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm.535-10a3.975 3.975 0 0 1-.409-1H4a1 1 0 0 1 0-2h2.126c.091-.355.23-.69.41-1H4a2 2 0 1 0 0 4h2.535z"/>
    <path d="M14 4a4 4 0 1 1-8 0 4 4 0 0 1 8 0z"/>
  </symbol>
  <symbol id="tools" viewBox="0 0 16 16">
    <path d="M1 0L0 1l2.2 3.081a1 1 0 0 0 .815.419h.07a1 1 0 0 1 .708.293l2.675 2.675-2.617 2.654A3.003 3.003 0 0 0 0 13a3 3 0 1 0 5.878-.851l2.654-2.617.968.968-.305.914a1 1 0 0 0 .242 1.023l3.356 3.356a1 1 0 0 0 1.414 0l1.586-1.586a1 1 0 0 0 0-1.414l-3.356-3.356a1 1 0 0 0-1.023-.242L10.5 9.5l-.96-.96 2.68-2.643A3.005 3.005 0 0 0 16 3c0-.269-.035-.53-.102-.777l-2.14 2.141L12 4l-.364-1.757L13.777.102a3 3 0 0 0-3.675 3.68L7.462 6.46 4.793 3.793a1 1 0 0 1-.293-.707v-.071a1 1 0 0 0-.419-.814L1 0zm9.646 10.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708zM3 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026L3 11z"/>
  </symbol>
  <symbol id="chevron-right" viewBox="0 0 16 16">
    <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
  </symbol>
  <symbol id="geo-fill" viewBox="0 0 16 16">
    <path fillRule="evenodd" d="M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.319 1.319 0 0 0-.37.265.301.301 0 0 0-.057.09V14l.002.008a.147.147 0 0 0 .016.033.617.617 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.619.619 0 0 0 .146-.15.148.148 0 0 0 .015-.033L12 14v-.004a.301.301 0 0 0-.057-.09 1.318 1.318 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465-1.281 0-2.462-.172-3.34-.465-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411z"/>
  </symbol>
</svg>

<main>

{/* Start Header Introduction */}
<div className="flex-container justify-content-center align-items-end"
  style={{
    backgroundImage: `url(${ButtonBG})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    minHeight: '300px', // Ensure there's a minimum height
    height: '100vh', // Make it full viewport height if needed
    display: 'flex',
    flexDirection: 'column'
  }}>







<div className="container-fluid justify-content-center align-items-center">
    <div className="row w3-padding-small w3-padding-32 ">
<div className="col-sm-12 col-md-8 px-5 py-2">
<div className="container">
<h1 className="w3-text-pink py-2" style={{fontSize:'4rem'}}>THE FOREFRONT OF DIGITAL MARKETING <span></span></h1>
<h5 className="mb-2">  "Boost your traffic and elevate your brand with marketing strategies tailored to your unique goals. Our customized approach ensures that every tactic is aligned with your business objectives, driving sustainable growth and amplifying your online presence."
  </h5>

<p className="py-3">
Take steps to grow your online presence - digital marketing offer the cost-effectiveness you need with the impact of an in-house team.
  </p>
<div>
<button className="btn btn-dark shadow px-5 w3-margin-right w3-hover-blue-gray">contact</button>
<button className="btn btn-dark shadow w3-hover-blue-gray px-5">contact</button>
</div>
</div>
</div>

<div className="col-sm-12 col-md-4 px-5 py-3">
<ContactForm/>
</div>
</div>
</div>
</div>
{/* End Header Introduction */}

 



    {/* Start Brands */}
    <div className="w3-container px-5 py-5">
    <div className="py-5" id="featured-3">
      <h2 className="pb-2 border-bottom">Columns with Icons</h2>
      <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
        <div className="feature col">
          <div className="feature-icon d-inline-flex align-items-center justify-content-center w3-pink bg-gradient fs-2 mb-3">
            <svg className="bi" width="1em" height="1em"><use xlinkHref="#collection"/></svg>
          </div>
          <h4 className="text-body-emphasis">SEO Optimization</h4>
          <p style={{fontSize:'14px'}}>Enhance your website's visibility on search engines through comprehensive keyword research, on-page and off-page optimization, and technical SEO improvements.</p>
          <a href="/" className="icon-link">
            Learn More
            <svg className="bi"><use xlinkHref="#chevron-right"/></svg>
          </a>
        </div>
        <div className="feature col">
          <div className="feature-icon d-inline-flex align-items-center justify-content-center w3-pink bg-gradient fs-2 mb-3">
            <svg className="bi" width="1em" height="1em"><use xlinkHref="#people-circle"/></svg>
          </div>
          <h4 className="text-body-emphasis">Social Media Marketing</h4>
          <p style={{fontSize:'14px'}}>Boost your brand's presence on social media platforms with tailored content strategies, community engagement, and data-driven ad campaigns to reach your target audience effectively.</p>
          <a href="/" className="icon-link">
            Learn More
            <svg className="bi"><use xlinkHref="#chevron-right"/></svg>
          </a>
        </div>
        <div className="feature col">
          <div className="feature-icon d-inline-flex align-items-center justify-content-center w3-pink bg-gradient fs-2 mb-3">
            <svg className="bi" width="1em" height="1em"><use xlinkHref="#toggles2"/></svg>
          </div>
          <h4 className="text-body-emphasis">Content Marketing</h4>
          <p style={{fontSize:'14px'}}>Create compelling and valuable content that attracts, engages, and retains your audience. Our content marketing services include blog writing, video production, and infographic design.</p>
          <a href="/" className="icon-link">
            Learn More
            <svg className="bi"><use xlinkHref="#chevron-right"/></svg>
          </a>
        </div>
      </div>
    </div>
  </div>
  {/* End Brands */}
   {/* Start Digital Marketing Types */}
   <div className="w3-container px-5 w3-black w3-padding-32 w3-margin-bottom">
   <h1 className="fw-bold text-body-white text-center">Brands our remote teams helped build:</h1>
   </div>
 
   <div className="w3-container px-5 py-3" id="icon-grid">
   
   <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-3 w3-margin-top">
     <div className="col d-flex align-items-start">
       <svg className="bi text-body-secondary flex-shrink-0 me-3" width="1.5em" height="1.5em"><use xlinkHref="#bootstrap"/></svg>
       <div>
         <h4 className="fw-bold mb-0 fs-4 text-body-emphasis">Conversion Rate Optimization</h4>
         <p style={{fontSize:'13px'}}>Optimize your website's user experience to increase conversion rates. Our experts use A/B testing, heat maps, and user feedback to enhance your site's performance.</p>
       </div>
     </div>
     <div className="col d-flex align-items-start">
       <svg className="bi text-body-secondary flex-shrink-0 me-3" width="1.5em" height="1.5em"><use xlinkHref="#cpu-fill"/></svg>
       <div>
         <h4 className="fw-bold mb-0 fs-4 text-body-emphasis">Influencer Marketing</h4>
         <p style={{fontSize:'13px'}}>Leverage the power of influencers to promote your brand. We connect you with industry influencers who can help you reach a wider audience and build trust.</p>
       </div>
     </div>
     <div className="col d-flex align-items-start">
       <svg className="bi text-body-secondary flex-shrink-0 me-3" width="1.5em" height="1.5em"><use xlinkHref="#calendar3"/></svg>
       <div>
         <h4 className="fw-bold mb-0 fs-4 text-body-emphasis">Marketing Automation</h4>
         <p style={{fontSize:'13px'}}>Automate your marketing processes to save time and improve efficiency. Our services include CRM integration, lead nurturing, and automated email campaigns.</p>
       </div>
     </div>
     <div className="col d-flex align-items-start">
       <svg className="bi text-body-secondary flex-shrink-0 me-3" width="1.5em" height="1.5em"><use xlinkHref="#toggles2"/></svg>
       <div>
         <h4 className="fw-bold mb-0 fs-4 text-body-emphasis">Reputation Management</h4>
         <p style={{fontSize:'13px'}}>Protect and enhance your brand's online reputation. We monitor reviews, manage public relations, and implement strategies to maintain a positive image.</p>
       </div>
     </div>
     <div className="col d-flex align-items-start">
       <svg className="bi text-body-secondary flex-shrink-0 me-3" width="1.5em" height="1.5em"><use xlinkHref="#speedometer2"/></svg>
       <div>
         <h4 className="fw-bold mb-0 fs-4 text-body-emphasis">Affiliate Marketing</h4>
         <p style={{fontSize:'13px'}}>Expand your reach and boost sales through affiliate marketing. We manage your affiliate programs, recruit partners, and track performance to maximize results.</p>
       </div>
     </div>
   
       <div className="col d-flex align-items-start">
       <svg className="bi text-body-secondary flex-shrink-0 me-3" width="1.75em" height="1.75em"><use xlinkHref="#home"/></svg>
       <div>
         <h4 className="fw-bold mb-0 fs-4 text-body-emphasis">Video Marketing</h4>
         <p style={{fontSize:'13px'}}>Create engaging video content to capture your audience's attention. We offer video production, editing, and promotion services to enhance your marketing strategy.</p>
       </div>
     </div>
     <div className="col d-flex align-items-start">
       <svg className="bi text-body-secondary flex-shrink-0 me-3" width="1.5em" height="1.5em"><use xlinkHref="#geo-fill"/></svg>
       <div>
         <h4 className="fw-bold mb-0 fs-4 text-body-emphasis">Mobile Marketing</h4>
         <p style={{fontSize:'13px'}}>Reach your audience on the go with mobile marketing strategies. We design mobile-friendly campaigns, optimize apps, and use SMS marketing to engage users.</p>
       </div>
     </div>
     <div className="col d-flex align-items-start">
       <svg className="bi text-body-secondary flex-shrink-0 me-3" width="1.5em" height="1.5em"><use xlinkHref="#tools"/></svg>
       <div>
         <h4 className="fw-bold mb-0 fs-4 text-body-emphasis">Local SEO</h4>
         <p style={{fontSize:'13px'}}>Improve your local search presence and attract nearby customers. Our local SEO services include Google My Business optimization, local citations, and reviews management.</p>
       </div>
     </div>
   </div>
 </div>
 {/* End Digital Marketing Types */}





<div className="w3-container px-5 py-5">
<div className="digital-marketing-options">
 {/* Start 3 Columns with Icons */}
    <div className="py-5" id="featured-3">
      <h1>Contact us to discuss the approach that works for you.</h1>
    <h4>
    Achieve unmatched results by combining remote expertise with the strengths of your internal team.
  </h4>
      <h2 className="pb-2 border-bottom">Choose the Right Digital Marketing Approach for Your Business</h2>
     <button>contact us</button>
    </div>
  </div>
</div>


    
    <div className="w3-container px-5 py-3">
   
  <div className="row row-cols-1 row-cols-md-2 align-items-md-center g-5">
      <div className="col-sm-12 col-md-6 col-lg-6 d-flex flex-column align-items-start gap-2">
<h2>Our Approach to Digital Marketing Excellence.</h2>

<p>We believe in delivering tailored digital marketing strategies that drive success. Our comprehensive approach ensures that every campaign is backed by data, customized to your needs, and executed by a team of experts. Discover how our proven methods can help you achieve your marketing goals and propel your business forward.</p>
   <a href="/" className="btn w3-pink btn-lg">Get Started</a>
      </div>
      <div className="col-sm-12 col-md-6 col-lg-6">
        <img src={MarketingMetrics} alt="digital marketing" className="shadow w-100"/>
      </div>
    </div>
    </div>
    
    <div className="w3-container px-5 py-3">
   
  <div className="row row-cols-1 row-cols-md-2 align-items-md-center g-5">
      <div className="col-sm-12 col-md-12 col-lg-12 d-flex flex-column align-items-start gap-2">
        <div className="row row-cols-1 row-cols-sm-4 g-4">
          <div className="col d-flex flex-column gap-2">
            <div className="feature-icon-small d-inline-flex align-items-center justify-content-center w3-pink bg-gradient fs-4 rounded-3">
              <svg className="bi" width="1em" height="1em"><use xlinkHref="#collection" /></svg>
            </div>
            <h4 className="fw-semibold mb-0 text-body-emphasis" >Data-Driven Strategies</h4>
            <p className="text-body-secondary" style={{fontSize:'13px'}}>We use data and analytics to inform our strategies, ensuring that every campaign is optimized for success.</p>
          </div>
          <div className="col d-flex flex-column gap-2">
            <div className="feature-icon-small d-inline-flex align-items-center justify-content-center w3-pink bg-gradient fs-4 rounded-3">
              <svg className="bi" width="1em" height="1em"><use xlinkHref="#gear-fill" /></svg>
            </div>
            <h4 className="fw-semibold mb-0 text-body-emphasis">Custom Solutions</h4>
            <p className="text-body-secondary" style={{fontSize:'13px'}}>We tailor our services to meet your unique needs, providing customized solutions that align with your business objectives.</p>
          </div>
          <div className="col d-flex flex-column gap-2">
            <div className="feature-icon-small d-inline-flex align-items-center justify-content-center w3-pink bg-gradient fs-4 rounded-3">
              <svg className="bi" width="1em" height="1em"><use xlinkHref="#speedometer" /></svg>
            </div>
            <h4 className="fw-semibold mb-0 text-body-emphasis">Proven Results</h4>
            <p className="text-body-secondary" style={{fontSize:'13px'}}>Our track record of success speaks for itself. We have helped numerous clients achieve their marketing goals and grow their businesses.</p>
          </div>
          <div className="col d-flex flex-column gap-2">
            <div className="feature-icon-small d-inline-flex align-items-center justify-content-center w3-pink bg-gradient fs-4 rounded-3">
              <svg className="bi" width="1em" height="1em"><use xlinkHref="#table" /></svg>
            </div>
            <h4 className="fw-semibold mb-0 text-body-emphasis">Expert Team</h4>
            <p className="text-body-secondary" style={{fontSize:'13px'}}>Our team of digital marketing experts has the knowledge and experience to drive your business forward.</p>
          </div>
        </div>
      </div>
    </div>
    </div>




  {/* End 3 Column Left Align */}
</main>

    </div>
  );
}

export default DigitalMarketingFeatures;

/**   <div className="row g-4 py-5 row-cols-1 row-cols-md-2">
        <div className="feature col">
          <div className="feature-icon d-inline-flex align-items-center justify-content-center w3-pink bg-gradient fs-2 mb-3">
            <svg className="bi" width="1em" height="1em"><use xlinkHref="#collection"/></svg>
          </div>
          <h4 className="text-body-emphasis">HIRE US</h4>
    <p className="text-muted text-center">Leverage our expertise to execute your digital marketing strategies seamlessly.</p>
     <p>
Here's a paragraph that incorporates the key points from your list:

By partnering with us, you maintain full control over your digital marketing strategy, allowing you to direct the course while we execute with precision to bring your vision to life. Our services are cost-effective, ensuring you only pay for what you need, without the overhead of full-time employees. Whether you're looking to scale your efforts up or down, our solutions are flexible and tailored to your business needs. You'll have access to an expert team of seasoned digital marketers dedicated to delivering results, with a quick turnaround that gets your campaigns off the ground efficiently.</p>
          <a href="/" className="icon-link">
            Learn More
            <svg className="bi"><use xlinkHref="#chevron-right"/></svg>
          </a>
        </div>


        <div className="feature col">
          <div className="feature-icon d-inline-flex align-items-center justify-content-center w3-pink bg-gradient fs-2 mb-3">
            <svg className="bi" width="1em" height="1em"><use xlinkHref="#people-circle"/></svg>
          </div>
          <h4 className="text-body-emphasis">OPTIONS 2. Consultative Approach</h4>
    <p className="text-muted" style={{fontSize:'14px'}}>Get expert guidance to enhance your digital marketing strategies and achieve sustainable growth.</p>
    <ul className="benefits-list" style={{fontSize:'14px'}}>
      <li><strong>Strategic Insights:</strong> Receive tailored advice and strategies to optimize your marketing efforts.</li>
      <li><strong>Customized Solutions:</strong> We assess your unique business challenges and provide solutions that fit.</li>
      <li><strong>Training & Support:</strong> Empower your team with the knowledge and tools they need to succeed.</li>
      <li><strong>Objective Perspective:</strong> Benefit from an external viewpoint to identify opportunities and areas for improvement.</li>
      <li><strong>Long-Term Success:</strong> Focus on sustainable growth with a strategic plan that evolves with your business.</li>
    </ul>
         
          <a href="/" className="icon-link">
            Learn More
            <svg className="bi"><use xlinkHref="#chevron-right"/></svg>
          </a>
        </div>
      </div>
      <div className="w3-container px-5 py-5" id="hanging-icons">
    <h2 className="pb-2 border-bottom">Hanging Icons</h2>
    <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
      <div className="col d-flex align-items-start">
        <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
          <svg className="bi" width="1em" height="1em"><use xlinkHref="#toggles2"/></svg>
        </div>
        <div>
          <h3 className="fs-2 text-body-emphasis">Email Marketing</h3>
          <p>Develop personalized email campaigns that drive engagement and conversions. Our services include email design, list segmentation, and performance analysis.</p>
          <a href="/" className="btn btn-primary">
            Get Started
          </a>
        </div>
      </div>
      <div className="col d-flex align-items-start">
        <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
          <svg className="bi" width="1em" height="1em"><use xlinkHref="#cpu-fill"/></svg>
        </div>
        <div>
          <h3 className="fs-2 text-body-emphasis">PPC Advertising</h3>
          <p>Maximize your ROI with targeted pay-per-click advertising campaigns. We manage your ads across platforms like Google Ads and Bing Ads to ensure optimal performance.</p>
          <a href="/" className="btn btn-primary">
            Get Started
          </a>
        </div>
      </div>
      <div className="col d-flex align-items-start">
        <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
          <svg className="bi" width="1em" height="1em"><use xlinkHref="#tools"/></svg>
        </div>
        <div>
          <h3 className="fs-2 text-body-emphasis">Analytics & Reporting</h3>
          <p>Gain insights into your digital marketing performance with our detailed analytics and reporting services. We provide actionable data to help you make informed decisions.</p>
          <a href="/" className="btn btn-primary">
            Get Started
          </a>
        </div>
      </div>
    </div>
  </div> */
  /**
    <div className="w3-black py-3" >
    <div className="row row-cols-1 align-items-center text-center  w3-padding-24">
    <h1 className="fw-bold w3-text-pink">Brands our remote teams helped build:</h1>
   <div className="w3-padding-32">
    <DMBrandBar/>
  </div>
  </div>
  </div> */