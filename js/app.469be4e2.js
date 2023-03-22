(function(){"use strict";var e={3128:function(e,t,o){var r=o(9963),s=o(6252),i=o(3577);function a(e,t,o,r,a,n){const l=(0,s.up)("router-view");return(0,s.wg)(),(0,s.iD)("div",{id:"app",class:(0,i.C_)({blackTheme:!e.$store.getters.getColorTheme})},[(0,s.Wm)(l)],2)}var n={name:"app"},l=o(3744);const m=(0,l.Z)(n,[["render",a]]);var c=m,u=o(2201);const d=e=>((0,s.dD)("data-v-be56f4e6"),e=e(),(0,s.Cn)(),e),h={class:"main-page"},f={class:"main-page__body"},_={class:"main-page__button"},p=d((()=>(0,s._)("button",{class:"button__body"},"Start",-1)));function g(e,t){const o=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("div",h,[(0,s._)("div",f,[(0,s._)("div",_,[(0,s.Wm)(o,{to:"/films"},{default:(0,s.w5)((()=>[p])),_:1})])])])}const v={},w=(0,l.Z)(v,[["render",g],["__scopeId","data-v-be56f4e6"]]);var b=w;const k={class:"films-carousel__body"},C={class:"films__container"},y=["onMouseover"],$={class:"film__body"},T={class:"image"},S={class:"image__name"},x={key:0,class:"image__premium",src:"https://cdn-icons-png.flaticon.com/512/6016/6016804.png",alt:"premium"},F=["src"],I=["onClick"];function O(e,t,o,r,a,n){return(0,s.wg)(),(0,s.iD)("div",{class:(0,i.C_)(["films-carousel",{blackTheme:!e.$store.getters.getColorTheme}])},[(0,s._)("div",k,[(0,s._)("div",C,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.films,(e=>((0,s.wg)(),(0,s.iD)("div",{class:"film",key:e,onMouseover:t=>n.selectFilm(e)},[(0,s._)("div",$,[(0,s._)("div",T,[(0,s._)("div",S,[(0,s.Uk)((0,i.zw)(e.name)+" ",1),e.premium?((0,s.wg)(),(0,s.iD)("img",x)):(0,s.kq)("",!0)]),(0,s._)("img",{src:e.img},null,8,F),(0,s._)("div",{class:"image__background",onClick:t=>n.switchToCurrentFilm(e)},null,8,I)])])],40,y)))),128))])])],2)}o(7658);const D=[{id:1,premium:!0,name:"Breaking Bad",img:"https://img2.goodfon.ru/wallpaper/nbig/b/a5/vo-vse-tyazhkie-breaking-bad-3918.jpg",description:"Set in Albuquerque, New Mexico, between 2008 and 2010, Breaking Bad follows Walter White, a modest high school chemistry teacher who transforms into a ruthless kingpin in the local methamphetamine drug trade, driven to financially provide for his family after being diagnosed with inoperable lung cancer."},{id:2,premium:!1,name:"Shameless",img:"https://img4.goodfon.ru/wallpaper/nbig/8/e2/cameron-monaghan-ethan-cutkosky-shameless-emmy-rossum-bess-1.jpg",description:"The series depicts the poor, dysfunctional family of Frank Gallagher, a neglectful single father of six: Fiona, Phillip, Ian, Debbie, Carl, and Liam. He spends his days drunk, high, or in search of misadventures, while his children learn to take care of themselves."},{id:3,premium:!0,name:"Paper House",img:"https://img5.goodfon.com/wallpaper/nbig/7/75/bumazhnyi-dom-la-casa-de-papel-money-heist-tv-series-serial.jpg",description:"Money Heist (Spanish: La casa de papel, [la ˈkasa ðe paˈpel], lit. 'The House of Paper') is a Spanish heist crime drama television series created by Álex Pina. The series traces two long-prepared heists led by the Professor (Álvaro Morte), one on the Royal Mint of Spain, and one on the Bank of Spain, told from the perspective of one of the robbers, Tokyo (Úrsula Corberó). The narrative is told in a real-time-like fashion and relies on flashbacks, time-jumps, hidden character motivations, and an unreliable narrator for complexity."},{id:4,premium:!0,name:"Better Call Saul",img:"https://www.cheatsheet.com/wp-content/uploads/2020/04/better-call-saul1.jpg",description:"Better Call Saul is an American crime and legal drama television series created by Vince Gilligan and Peter Gould. It is a spin-off, as well as both a prequel and a sequel, to Gilligan's previous series, Breaking Bad. Set primarily in the early to middle part of the first decade of the 2000s in Albuquerque, New Mexico, the series develops Jimmy McGill (Bob Odenkirk), an earnest lawyer and former con artist, into a greedy criminal defense attorney known as Saul Goodman. Also shown is the moral decline of former police officer Mike Ehrmantraut (Jonathan Banks), who becomes a violent fixer for drug traffickers to support his granddaughter and her widowed mother. The show premiered on AMC on February 8, 2015. The sixth and final season consisting of 13 episodes premiered on April 18, 2022, and concluded on August 15, 2022, after six seasons for a total of 63 episodes."},{id:5,premium:!1,name:"The Bridge",img:"https://topic.imgix.net/usq/ba0e4905-4ec9-4856-982a-f8d48d3c660d/6f5981b8-d008-4fe7-9798-94e840e69274.jpeg?auto=compress,format&cs=srgb&h=781&_=0c8c771cf95a53a6108f640a1307dad6&bg=%23ffffff",description:"When a body is found on the bridge between Denmark and Sweden, right on the border, Danish inspector Martin Rohde and Swedish Saga Norén have to share jurisdiction and work together to find the killer."},{id:6,premium:!1,name:"The end of the fun***in world",img:"https://flxt.tmsimg.com/assets/p14695238_b_h8_aa.jpg",description:"A budding teen psychopath and a rebel hungry for adventure embark on a star-crossed road trip in this darkly comic series based on a graphic novel."}];var M={data:()=>({selectedFilm:null,registrated:!1}),methods:{selectFilm(e){this.selectedFilm=e},switchToCurrentFilm(e){let t=localStorage.getItem("user-info");t?(t=JSON.parse(t),e.premium?t.premium?this.$router.push(`/films/${e.id}`):this.$router.push("/no-premium"):this.$router.push(`/films/${e.id}`)):this.$router.push("/no-registration")}},created(){this.films=D}};const B=(0,l.Z)(M,[["render",O],["__scopeId","data-v-fdd043f0"]]);var P=B;const A={class:"films-layout"},q={class:"filns-layout__body"};function N(e,t,o,r,i,a){const n=(0,s.up)("header-navbar"),l=(0,s.up)("router-view");return(0,s.wg)(),(0,s.iD)("div",A,[(0,s._)("div",q,[(0,s.Wm)(n),(0,s.Wm)(l)])])}const R={class:"header-navbar__container"},E={class:"header-navbar__navbar"},J={class:"header-navbar__item"},V={class:"form-check form-switch"},j={class:"header-navbar__auth"},U={key:0,class:"header-navbar__premium",src:"https://cdn-icons-png.flaticon.com/512/6016/6016804.png",alt:"premium"};function W(e,t,o,a,n,l){return(0,s.wg)(),(0,s.iD)("div",{class:(0,i.C_)(["header-navbar",{blackTheme:!e.$store.getters.getColorTheme}])},[(0,s._)("div",R,[(0,s._)("div",{class:"header-navbar__logo",onClick:t[0]||(t[0]=(...e)=>l.setFilmsPage&&l.setFilmsPage(...e))},"vuerouter"),(0,s._)("div",E,[(0,s._)("div",J,[(0,s._)("div",V,[(0,s.wy)((0,s._)("input",{onClick:t[1]||(t[1]=(...e)=>l.changeColorTheme&&l.changeColorTheme(...e)),class:"form-check-input",type:"checkbox",role:"switch","onUpdate:modelValue":t[2]||(t[2]=t=>e.checked=t),id:"flexSwitchCheckDefault"},null,512),[[r.e8,e.checked]])])]),(0,s._)("div",{class:"header-navbar__item",onClick:t[3]||(t[3]=(...e)=>l.switchToAuthState&&l.switchToAuthState(...e))},[(0,s._)("div",j,[(0,s._)("span",null,(0,i.zw)(e.signedIn?"watch profile":"sign in"),1),e.$store.getters.getAccountState?((0,s.wg)(),(0,s.iD)("img",U)):(0,s.kq)("",!0)])])])])],2)}const z=[{reaction:"excellent",rate:1},{reaction:"good",rate:2},{reaction:"normal",rate:3},{reaction:"ok",rate:4},{reaction:"bad",rate:5}];var Z={data:()=>({signedIn:!1,checked:!1}),methods:{switchToAuthState(){this.signedIn?this.$router.push("/user"):this.$router.push("/user-auth")},changeColorTheme(){this.$store.commit("changeColorTheme"),localStorage.setItem("white-theme",JSON.stringify(this.$store.getters.getColorTheme))},setFilmsPage(){this.$router.push("/films")},checkLocalStorage(){const e=localStorage.getItem("user-info");e&&(this.signedIn=!0)}},created(){const e=localStorage.getItem("white-theme");e?(JSON.parse(e)!=this.$store.getters.getColorTheme&&(this.$store.commit("changeColorTheme"),this.checked=!this.$store.getters.getColorTheme),this.checked=!this.$store.getters.getColorTheme):localStorage.setItem("white-theme",JSON.stringify(!0));let t=localStorage.getItem("user-info");if(t){t=JSON.parse(t),this.signedIn=!0,!1!==t.premium&&!0!==t.premium||t.premium!=this.$store.getters.getAccountState&&this.$store.commit("changeAccountState");for(let o in t)0!=t[o]&&0!=o||(localStorage.removeItem("user-info"),this.signedIn=!1,this.$router.push("/films"));this.$store.commit("setReactions",z);const e=localStorage.getItem("films-review");e&&JSON.parse(e).forEach((e=>{this.$store.commit("setReviewOnFilms",e)}))}},watch:{"$route.path"(){const e=localStorage.getItem("user-info");this.signedIn=!!e}}};const H=(0,l.Z)(Z,[["render",W],["__scopeId","data-v-539a31ee"]]);var L=H,Y={components:{HeaderNavbar:L}};const G=(0,l.Z)(Y,[["render",N]]);var K=G;const X=e=>((0,s.dD)("data-v-5a0d835d"),e=e(),(0,s.Cn)(),e),Q={class:"current-film"},ee={key:0,class:"current-film__body"},te={class:"current-film__name"},oe=["src"],re={class:"current-film__plot"},se=X((()=>(0,s._)("p",null,"Plot:",-1))),ie=X((()=>(0,s._)("br",null,null,-1))),ae={class:"reactions"},ne=["onClick"],le={class:"reaction__button"},me={key:1,class:"toast",role:"alert","aria-live":"assertive","aria-atomic":"true"},ce=X((()=>(0,s._)("div",{class:"toast-header"},[(0,s._)("strong",{class:"mr-auto"},"films app")],-1))),ue=X((()=>(0,s._)("div",{class:"toast-body"},"Thank you for review!",-1))),de=[ce,ue];function he(e,t,o,r,a,n){return(0,s.wg)(),(0,s.iD)("div",Q,[a.film?((0,s.wg)(),(0,s.iD)("div",ee,[(0,s._)("div",te,(0,i.zw)(a.film.name),1),(0,s._)("img",{class:"current-film__image",src:a.film.img},null,8,oe),(0,s._)("div",re,[se,ie,(0,s.Uk)((0,i.zw)(a.film.description)+" ",1),(0,s._)("div",ae,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.$store.getters.getReactions,(e=>((0,s.wg)(),(0,s.iD)("div",{class:"reaction",key:e,onClick:t=>n.addReaction(e)},[(0,s._)("button",le,(0,i.zw)(e.reaction),1)],8,ne)))),128))])])])):(0,s.kq)("",!0),a.showToast?((0,s.wg)(),(0,s.iD)("div",me,de)):(0,s.kq)("",!0)])}var fe={data(){return{film:null,showToast:!1}},methods:{addReaction(e){this.showToast=!0,setTimeout((()=>{this.showToast=!1}),3e3);const t={reaction:e.reaction,name:this.film.name,img:this.film.img,id:this.film.id};this.$store.commit("setReviewOnFilms",t),localStorage.setItem("films-review",JSON.stringify(this.$store.getters.getReviewOnFilms))}},created(){const e=D.find((e=>e.id==this.$route.params.id));e&&(this.film=e)}};const _e=(0,l.Z)(fe,[["render",he],["__scopeId","data-v-5a0d835d"]]);var pe=_e;const ge=e=>((0,s.dD)("data-v-4d02adf8"),e=e(),(0,s.Cn)(),e),ve={class:"user-profile"},we={class:"user-profile__body"},be={class:"form__body"},ke=ge((()=>(0,s._)("label",{class:"form__name form__label"},"Name",-1))),Ce={key:0,class:"errorMsg"},ye={class:"form__body"},$e=ge((()=>(0,s._)("label",{class:"form__phone form__label"},"Phone",-1))),Te={key:0,class:"errorMsg"},Se={class:"form__body"},xe=ge((()=>(0,s._)("label",{class:"form__email form__label"},"Email address",-1))),Fe={key:0,class:"errorMsg"},Ie={class:"form__body passwords"},Oe={class:"form__body_password"},De=ge((()=>(0,s._)("label",{class:"form__password form__label"},"Password",-1))),Me={key:0,class:"errorMsg"},Be={class:"form__body_password"},Pe=ge((()=>(0,s._)("label",{class:"form__passwordConfirmation form__label"},"Confirm the password",-1))),Ae={key:0,class:"errorMsg"},qe={class:"form__body"},Ne=ge((()=>(0,s._)("label",{class:"form__sex form__label"},"Sex",-1))),Re=ge((()=>(0,s._)("option",{selected:"",value:"male"},"male",-1))),Ee=ge((()=>(0,s._)("option",{value:"female"},"female",-1))),Je=ge((()=>(0,s._)("option",{value:"other"},"other",-1))),Ve=[Re,Ee,Je],je={key:0,class:"errorMsg"},Ue={class:"form__body form__body_checkbox"},We={class:"form__buttons"};function ze(e,t,o,a,n,l){return(0,s.wg)(),(0,s.iD)("div",ve,[(0,s._)("div",we,[(0,s._)("form",{class:(0,i.C_)(["form",{errorForm:e.showFormError}])},[(0,s._)("div",{class:(0,i.C_)(["form__content",{blackThemeForm:!e.$store.getters.getColorTheme}])},[(0,s._)("div",be,[ke,(0,s.wy)((0,s._)("input",{class:(0,i.C_)({blackThemeButton:!e.$store.getters.getColorTheme}),onClick:t[0]||(t[0]=e=>l.resetErrors()),onBlur:t[1]||(t[1]=(...e)=>a.v$.form.name.$touch&&a.v$.form.name.$touch(...e)),onFocus:t[2]||(t[2]=(...e)=>a.v$.form.name.$reset&&a.v$.form.name.$reset(...e)),maxlength:"35",autocomplete:"off","onUpdate:modelValue":t[3]||(t[3]=t=>e.form.name=t)},null,34),[[r.nr,e.form.name]]),a.v$.form.name.$error?((0,s.wg)(),(0,s.iD)("div",Ce," Min length is 2 symbols ")):(0,s.kq)("",!0)]),(0,s._)("div",ye,[$e,(0,s.wy)((0,s._)("input",{class:(0,i.C_)({blackThemeButton:!e.$store.getters.getColorTheme}),onClick:t[4]||(t[4]=e=>l.resetErrors()),onBlur:t[5]||(t[5]=(...e)=>a.v$.form.phone.$touch&&a.v$.form.phone.$touch(...e)),onFocus:t[6]||(t[6]=(...e)=>a.v$.form.phone.$reset&&a.v$.form.phone.$reset(...e)),maxlength:"35",autocomplete:"off","onUpdate:modelValue":t[7]||(t[7]=t=>e.form.phone=t)},null,34),[[r.nr,e.form.phone]]),a.v$.form.phone.$error?((0,s.wg)(),(0,s.iD)("div",Te," Type real phone ")):(0,s.kq)("",!0)]),(0,s._)("div",Se,[xe,(0,s.wy)((0,s._)("input",{class:(0,i.C_)({blackThemeButton:!e.$store.getters.getColorTheme}),onClick:t[8]||(t[8]=e=>l.resetErrors()),onBlur:t[9]||(t[9]=(...e)=>a.v$.form.email.$touch&&a.v$.form.email.$touch(...e)),onFocus:t[10]||(t[10]=(...e)=>a.v$.form.email.$reset&&a.v$.form.email.$reset(...e)),autocomplete:"off","onUpdate:modelValue":t[11]||(t[11]=t=>e.form.email=t)},null,34),[[r.nr,e.form.email]]),a.v$.form.email.$error?((0,s.wg)(),(0,s.iD)("div",Fe," Type correct email ")):(0,s.kq)("",!0)]),(0,s._)("div",Ie,[(0,s._)("div",Oe,[De,(0,s.wy)((0,s._)("input",{class:(0,i.C_)({blackThemeButton:!e.$store.getters.getColorTheme}),onClick:t[12]||(t[12]=e=>l.resetErrors()),onBlur:t[13]||(t[13]=(...e)=>a.v$.form.password.$touch&&a.v$.form.password.$touch(...e)),onFocus:t[14]||(t[14]=(...e)=>a.v$.form.password.$reset&&a.v$.form.password.$reset(...e)),maxlength:"20",autocomplete:"off","onUpdate:modelValue":t[15]||(t[15]=t=>e.form.password=t),type:"password"},null,34),[[r.nr,e.form.password]]),a.v$.form.password.$error?((0,s.wg)(),(0,s.iD)("div",Me," Min length is 8 symbols. ")):(0,s.kq)("",!0)]),(0,s._)("div",Be,[Pe,(0,s.wy)((0,s._)("input",{class:(0,i.C_)({blackThemeButton:!e.$store.getters.getColorTheme}),onClick:t[16]||(t[16]=e=>l.resetErrors()),onBlur:t[17]||(t[17]=(0,r.iM)(((...e)=>a.v$.form.passwordConfirmation.$touch&&a.v$.form.passwordConfirmation.$touch(...e)),["stop"])),onFocus:t[18]||(t[18]=(0,r.iM)(((...e)=>a.v$.form.passwordConfirmation.$reset&&a.v$.form.passwordConfirmation.$reset(...e)),["stop"])),maxlength:"20",autocomplete:"off","onUpdate:modelValue":t[19]||(t[19]=t=>e.form.passwordConfirmation=t),type:"password"},null,34),[[r.nr,e.form.passwordConfirmation]]),a.v$.form.passwordConfirmation.$error?((0,s.wg)(),(0,s.iD)("div",Ae," Passwords don`t match ")):(0,s.kq)("",!0)])]),(0,s._)("div",qe,[Ne,(0,s.wy)((0,s._)("select",{class:(0,i.C_)([{blackThemeButton:!e.$store.getters.getColorTheme},"form__select"]),onClick:t[20]||(t[20]=e=>l.resetErrors()),onFocus:t[21]||(t[21]=(...e)=>a.v$.form.sex.$touch&&a.v$.form.sex.$touch(...e)),onBlur:t[22]||(t[22]=(...e)=>a.v$.form.sex.$reset&&a.v$.form.sex.$reset(...e)),"onUpdate:modelValue":t[23]||(t[23]=t=>e.form.sex=t)},Ve,34),[[r.bM,e.form.sex]]),a.v$.form.sex.$error?((0,s.wg)(),(0,s.iD)("div",je," Select your sex ")):(0,s.kq)("",!0)]),(0,s._)("div",Ue,[(0,s.wy)((0,s._)("input",{class:(0,i.C_)({blackThemeButton:!e.$store.getters.getColorTheme}),onClick:t[24]||(t[24]=e=>l.resetErrors()),autocomplete:"off",type:"checkbox","onUpdate:modelValue":t[25]||(t[25]=t=>e.form.checkbox=t)},null,2),[[r.e8,e.form.checkbox]]),(0,s._)("label",{class:(0,i.C_)(["form__checkbox",{errorMsgCheckbox:!e.form.checkbox}])},"I agree to send form",2)]),(0,s._)("div",We,[(0,s._)("button",{class:(0,i.C_)(["form__button form__button_submit",{blackThemeButton:!e.$store.getters.getColorTheme}]),onClick:t[26]||(t[26]=(0,r.iM)(((...e)=>l.submitForm&&l.submitForm(...e)),["prevent","stop"]))}," Submit ",2),(0,s._)("button",{onClick:t[27]||(t[27]=(0,r.iM)(((...e)=>l.resetForm&&l.resetForm(...e)),["prevent"])),class:(0,i.C_)(["form__button form__button_reset",{blackThemeButton:!e.$store.getters.getColorTheme}])}," Reset ",2)])],2)],2)])])}var Ze=o(4028),He=o(2587),Le={setup(){return{v$:(0,Ze.Xw)()}},data:()=>({userData:!1,showFormError:!1,form:{name:"",email:"",phone:"",password:"",passwordConfirmation:"",sex:"male",checkbox:""}}),methods:{async submitForm(){const e=await this.v$.$validate();e?(localStorage.setItem("user-info",JSON.stringify(this.form)),this.resetForm(),this.$router.push("/user")):this.showFormError=!0},resetForm(){for(let e in this.form)this.form[e]="";this.form.sex="male"},resetErrors(){this.showFormError=!1;for(let e in this.form)this.v$.form[e].$dirty=!1}},validations(){return{form:{name:{nameMinLength:(0,He.Ei)(2),required:He.C1},phone:{phoneMinLength:(0,He.Ei)(2),phoneValidator(e){return!isNaN(e)},required:He.C1},email:{emailMinLength:(0,He.Ei)(8),emaillValidation:He.Do,required:He.C1},password:{passwordMinLength:(0,He.Ei)(8),required:He.C1},passwordConfirmation:{passwordMinLength:(0,He.Ei)(8),passwordConfirmationConfirm:(0,He.sH)(this.form.password),required:He.C1},sex:{required:He.C1},checkbox:{checkboxValidator(e){return 1==e}},required:He.C1}}}};const Ye=(0,l.Z)(Le,[["render",ze],["__scopeId","data-v-4d02adf8"]]);var Ge=Ye;const Ke=e=>((0,s.dD)("data-v-12f4659c"),e=e(),(0,s.Cn)(),e),Xe={class:"user__info__wrapper"},Qe={key:0,class:"user-info__body"},et={class:"user-info__row"},tt={class:"user-info__name"},ot={class:"user-info__row"},rt={class:"user-info__sex"},st={class:"user-info__row"},it={class:"user-info__phone"},at={class:"user-info__row"},nt={class:"user-info__email"},lt={key:0,class:"user-info__row"},mt=Ke((()=>(0,s._)("p",{style:{"margin-bottom":"10px"}},"Status: basic",-1))),ct={key:1,style:{"margin-bottom":"0px"}},ut={class:"user-info__row"},dt={class:"films-review"},ht={class:"films-review__body"},ft={class:"films__review__column"},_t={class:"films-review__name"},pt={class:"films-review__rate"},gt=["onClick"],vt={class:"films-review__column"},wt=["src"];function bt(e,t,o,a,n,l){const m=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("div",Xe,[(0,s._)("div",{class:(0,i.C_)(["user-info",{blackThemeCard:!e.$store.getters.getColorTheme}])},[e.userInfo?((0,s.wg)(),(0,s.iD)("div",Qe,[(0,s._)("div",et,[(0,s._)("div",tt,(0,i.zw)(e.userInfo.name),1)]),(0,s._)("div",ot,[(0,s._)("div",rt,"Sex: "+(0,i.zw)(e.userInfo.sex),1)]),(0,s._)("div",st,[(0,s._)("div",it,(0,i.zw)(e.userInfo.phone),1)]),(0,s._)("div",at,[(0,s._)("div",nt,(0,i.zw)(e.userInfo.email),1)]),e.premiumState?((0,s.wg)(),(0,s.iD)("p",ct,"Status: premium")):((0,s.wg)(),(0,s.iD)("div",lt,[mt,(0,s._)("button",{class:(0,i.C_)([{blackThemeButton:!e.$store.getters.getColorTheme},"user-info__premium user-info__button"]),onClick:t[0]||(t[0]=(0,r.iM)(((...e)=>l.switchToPremiumPaymentForm&&l.switchToPremiumPaymentForm(...e)),["prevent"]))}," buy premium ",2)])),(0,s._)("div",ut,[(0,s._)("button",{class:(0,i.C_)(["user-info-delete user-info__button",{blackThemeButton:!e.$store.getters.getColorTheme}]),onClick:t[1]||(t[1]=(0,r.iM)(((...e)=>l.deleteUser&&l.deleteUser(...e)),["prevent"]))}," sign out ",2)])])):(0,s.kq)("",!0)],2),(0,s._)("div",dt,[(0,s._)("div",ht,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.$store.getters.getReviewOnFilms,(t=>((0,s.wg)(),(0,s.iD)("div",{class:(0,i.C_)(["films-review__row",{blackThemeCard:!e.$store.getters.getColorTheme}]),key:t},[(0,s._)("div",ft,[(0,s.Wm)(m,{to:"/films/"+t.id,class:"films-review__link"},{default:(0,s.w5)((()=>[(0,s._)("div",_t,(0,i.zw)(t.name),1),(0,s._)("div",pt,"Rate: "+(0,i.zw)(t.reaction),1)])),_:2},1032,["to"]),(0,s._)("div",{class:(0,i.C_)([{blackThemeCard:!e.$store.getters.getColorTheme},"films-review__delete"]),onClick:e=>l.deleteReviewOnFilms(t)}," delete review ",10,gt)]),(0,s._)("div",vt,[(0,s._)("img",{src:t.img,alt:"film preview",class:"films-review__img"},null,8,wt)])],2)))),128))])])])}var kt={data:()=>({userInfo:null,premiumState:!1}),methods:{deleteUser(){const e=window.confirm(`Confirm deletion of "${this.userInfo.name}"`);e&&(1==JSON.parse(localStorage.getItem("user-info")).premium&&this.$store.commit("changeAccountState"),this.$store.commit("deleteAllReviewsOnFilms"),localStorage.removeItem("user-info"),localStorage.removeItem("films-review"),this.$router.push("/films"))},switchToPremiumPaymentForm(){this.$router.push("/user/premium")},deleteReviewOnFilms(e){this.$store.commit("deleteReviewOnFilms",e);const t=this.$store.getters.getReviewOnFilms;t&&localStorage.setItem("films-review",JSON.stringify(this.$store.getters.getReviewOnFilms))}},created(){const e=localStorage.getItem("user-info");e&&(this.userInfo=JSON.parse(e),this.userInfo.premium&&(this.premiumState=!0))}};const Ct=(0,l.Z)(kt,[["render",bt],["__scopeId","data-v-12f4659c"]]);var yt=Ct;const $t=e=>((0,s.dD)("data-v-f238450a"),e=e(),(0,s.Cn)(),e),Tt={class:"payment-form"},St={class:"payment-form__body"},xt={class:"container p-0"},Ft=$t((()=>(0,s._)("p",{class:"h8 py-3"},"Payment Details",-1))),It={class:"row gx-3"},Ot={class:"col-12"},Dt={class:"d-flex flex-column"},Mt=$t((()=>(0,s._)("p",{class:"text mb-1"},"Person Name",-1))),Bt={class:"col-12"},Pt={class:"d-flex flex-column"},At=$t((()=>(0,s._)("p",{class:"text mb-1"},"Card Number",-1))),qt={class:"col-6"},Nt={class:"d-flex flex-column"},Rt=$t((()=>(0,s._)("p",{class:"text mb-1"},"Expiry",-1))),Et={class:"col-6"},Jt={class:"d-flex flex-column"},Vt=$t((()=>(0,s._)("p",{class:"text mb-1"},"CVV/CVC",-1))),jt=$t((()=>(0,s._)("span",{style:{color:"#000"},class:"ps-3"},"Pay $9",-1))),Ut=$t((()=>(0,s._)("span",{class:"fas fa-arrow-right"},null,-1))),Wt=[jt,Ut];function zt(e,t,o,r,a,n){return(0,s.wg)(),(0,s.iD)("div",Tt,[(0,s._)("div",St,[(0,s._)("div",xt,[(0,s._)("div",{class:(0,i.C_)(["card px-4",{blackThemeCard:!e.$store.getters.getColorTheme}])},[Ft,(0,s._)("div",It,[(0,s._)("div",Ot,[(0,s._)("div",Dt,[Mt,(0,s._)("input",{class:(0,i.C_)([{blackThemeInput:!e.$store.getters.getColorTheme},"form-control mb-3"]),style:{color:"#000"},type:"text",placeholder:"Name",value:"Barry Allen"},null,2)])]),(0,s._)("div",Bt,[(0,s._)("div",Pt,[At,(0,s._)("input",{class:(0,i.C_)([{blackThemeInput:!e.$store.getters.getColorTheme},"form-control mb-3"]),type:"text",placeholder:"1234 5678 435678"},null,2)])]),(0,s._)("div",qt,[(0,s._)("div",Nt,[Rt,(0,s._)("input",{class:(0,i.C_)([{blackThemeInput:!e.$store.getters.getColorTheme},"form-control mb-3"]),type:"text",placeholder:"MM/YYYY"},null,2)])]),(0,s._)("div",Et,[(0,s._)("div",Jt,[Vt,(0,s._)("input",{class:(0,i.C_)([{blackThemeInput:!e.$store.getters.getColorTheme},"form-control mb-3 pt-2"]),type:"password",placeholder:"***"},null,2)])]),(0,s._)("div",{class:"col-12",onClick:t[0]||(t[0]=(...e)=>n.setPremiumState&&n.setPremiumState(...e))},[(0,s._)("div",{class:(0,i.C_)(["btn btn-primary mb-3",{blackThemeInput:!e.$store.getters.getColorTheme}])},Wt,2)])])],2)])])])}var Zt={methods:{setPremiumState(){const e=JSON.parse(localStorage.getItem("user-info"));e["premium"]=!0,localStorage.setItem("user-info",JSON.stringify(e)),this.$router.push("/user"),this.$store.commit("changeAccountState")}}};const Ht=(0,l.Z)(Zt,[["render",zt],["__scopeId","data-v-f238450a"]]);var Lt=Ht;const Yt=e=>((0,s.dD)("data-v-c2b4407c"),e=e(),(0,s.Cn)(),e),Gt={class:"no-registration"},Kt={class:"no-registration__body"},Xt=Yt((()=>(0,s._)("div",{class:"no-registation__title"},"No access",-1))),Qt=Yt((()=>(0,s._)("div",{class:"no-registation__text"}," For watching films info you need to sign in ",-1))),eo={class:"no-registation__buttons"},to=Yt((()=>(0,s._)("button",{class:"no-registration__button"}," To films ",-1))),oo=Yt((()=>(0,s._)("button",{class:"no-registration__button"},"Sign in",-1)));function ro(e,t){const o=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("div",Gt,[(0,s._)("div",Kt,[Xt,Qt,(0,s._)("div",eo,[(0,s.Wm)(o,{to:"/films"},{default:(0,s.w5)((()=>[to])),_:1}),(0,s.Wm)(o,{to:"/user-auth"},{default:(0,s.w5)((()=>[oo])),_:1})])])])}const so={},io=(0,l.Z)(so,[["render",ro],["__scopeId","data-v-c2b4407c"]]);var ao=io;const no=e=>((0,s.dD)("data-v-ffde182e"),e=e(),(0,s.Cn)(),e),lo={class:"no-premium"},mo={class:"no-premium__body"},co=no((()=>(0,s._)("div",{class:"no-registation__title"},"No access",-1))),uo=no((()=>(0,s._)("div",{class:"no-registation__text"}," For watching some films you need to buy premium status ",-1))),ho={class:"no-registation__buttons"},fo=no((()=>(0,s._)("button",{class:"no-premium__button"},"To films",-1))),_o=no((()=>(0,s._)("button",{class:"no-premium__button"},"Premium",-1)));function po(e,t){const o=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("div",lo,[(0,s._)("div",mo,[co,uo,(0,s._)("div",ho,[(0,s.Wm)(o,{to:"/films"},{default:(0,s.w5)((()=>[fo])),_:1}),(0,s.Wm)(o,{to:"/user/premium"},{default:(0,s.w5)((()=>[_o])),_:1})])])])}const go={},vo=(0,l.Z)(go,[["render",po],["__scopeId","data-v-ffde182e"]]);var wo=vo,bo=(0,u.p7)({history:(0,u.r5)(),routes:[{path:"/:pathMatch(.*)*",redirect:"/films"},{path:"/",name:"main",component:b},{path:"/films",name:"films",component:P},{path:"/films/:id",name:"film",component:pe},{path:"/user-auth",name:"userAuthefication",component:Ge},{path:"/user",name:"user",component:yt},{path:"/user/premium",name:"premium",component:Lt},{path:"/no-premium",name:"premiumWarning",component:wo},{path:"/no-registration",name:"registationWarning",component:ao},{path:"/films",name:"filmsLayout",component:K,children:[{path:"",name:"films",component:P},{path:":id",name:"film",component:pe},{path:"/user-auth",name:"userAuthefication",component:Ge},{path:"/user",name:"user",component:yt},{path:"/user/premium",name:"premium",component:Lt}]}]}),ko=o(3907),Co=(0,ko.MT)({state(){return{whiteTheme:!0,premiumAccount:!1,reactions:[],reviewOnFilms:[]}},getters:{getColorTheme(e){return e.whiteTheme},getAccountState(e){return e.premiumAccount},getUserInfo(e){return e.userInfo},getReactions(e){return e.reactions},getReviewOnFilms(e){return e.reviewOnFilms}},mutations:{changeColorTheme(e){e.whiteTheme=!e.whiteTheme},changeAccountState(e){e.premiumAccount=!e.premiumAccount},setReactions(e,t){e.reactions=t},setReviewOnFilms(e,t){e.reviewOnFilms=e.reviewOnFilms.filter((e=>e.name!=t.name)),e.reviewOnFilms.push(t)},deleteReviewOnFilms(e,t){e.reviewOnFilms=e.reviewOnFilms.filter((e=>e.name!=t.name))},deleteAllReviewsOnFilms(e){e.reviewOnFilms=[]}},actions:{}});const yo=(0,r.ri)(c);yo.use(bo),yo.use(Co),yo.mount("#app")}},t={};function o(r){var s=t[r];if(void 0!==s)return s.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,o),i.exports}o.m=e,function(){var e=[];o.O=function(t,r,s,i){if(!r){var a=1/0;for(c=0;c<e.length;c++){r=e[c][0],s=e[c][1],i=e[c][2];for(var n=!0,l=0;l<r.length;l++)(!1&i||a>=i)&&Object.keys(o.O).every((function(e){return o.O[e](r[l])}))?r.splice(l--,1):(n=!1,i<a&&(a=i));if(n){e.splice(c--,1);var m=s();void 0!==m&&(t=m)}}return t}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[r,s,i]}}(),function(){o.d=function(e,t){for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};o.O.j=function(t){return 0===e[t]};var t=function(t,r){var s,i,a=r[0],n=r[1],l=r[2],m=0;if(a.some((function(t){return 0!==e[t]}))){for(s in n)o.o(n,s)&&(o.m[s]=n[s]);if(l)var c=l(o)}for(t&&t(r);m<a.length;m++)i=a[m],o.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return o.O(c)},r=self["webpackChunkvuerouter"]=self["webpackChunkvuerouter"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=o.O(void 0,[998],(function(){return o(3128)}));r=o.O(r)})();
//# sourceMappingURL=app.469be4e2.js.map