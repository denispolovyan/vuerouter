(function(){"use strict";var e={9651:function(e,o,t){var r=t(9963),s=t(6252),a=t(3577);function n(e,o,t,r,n,i){const l=(0,s.up)("router-view");return(0,s.wg)(),(0,s.iD)("div",{id:"app",class:(0,a.C_)({blackTheme:!e.$store.getters.getColorTheme})},[(0,s.Wm)(l)],2)}var i={name:"app"},l=t(3744);const m=(0,l.Z)(i,[["render",n]]);var c=m,u=t(2201);const d=e=>((0,s.dD)("data-v-be56f4e6"),e=e(),(0,s.Cn)(),e),h={class:"main-page"},f={class:"main-page__body"},p={class:"main-page__button"},_=d((()=>(0,s._)("button",{class:"button__body"},"Start",-1)));function g(e,o){const t=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("div",h,[(0,s._)("div",f,[(0,s._)("div",p,[(0,s.Wm)(t,{to:"/films"},{default:(0,s.w5)((()=>[_])),_:1})])])])}const v={},b=(0,l.Z)(v,[["render",g],["__scopeId","data-v-be56f4e6"]]);var w=b;const y={class:"films-carousel__body"},k={class:"films__container"},$=["onMouseover"],C={class:"film__body"},x={class:"image"},T={class:"image__name"},S={key:0,class:"image__premium",src:"https://cdn-icons-png.flaticon.com/512/6016/6016804.png",alt:"premium"},I=["src"],D=["onClick"];function F(e,o,t,r,n,i){return(0,s.wg)(),(0,s.iD)("div",{class:(0,a.C_)(["films-carousel",{blackTheme:!e.$store.getters.getColorTheme}])},[(0,s._)("div",y,[(0,s._)("div",k,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.films,(e=>((0,s.wg)(),(0,s.iD)("div",{class:"film",key:e,onMouseover:o=>i.selectFilm(e)},[(0,s._)("div",C,[(0,s._)("div",x,[(0,s._)("div",T,[(0,s.Uk)((0,a.zw)(e.name)+" ",1),e.premium?((0,s.wg)(),(0,s.iD)("img",S)):(0,s.kq)("",!0)]),(0,s._)("img",{src:e.img},null,8,I),(0,s._)("div",{class:"image__background",onClick:o=>i.switchToCurrentFilm(e)},null,8,D)])])],40,$)))),128))])])],2)}t(7658);let M=[{id:1,premium:!0,name:"Breaking Bad",img:"https://img2.goodfon.ru/wallpaper/nbig/b/a5/vo-vse-tyazhkie-breaking-bad-3918.jpg",description:"Set in Albuquerque, New Mexico, between 2008 and 2010, Breaking Bad follows Walter White, a modest high school chemistry teacher who transforms into a ruthless kingpin in the local methamphetamine drug trade, driven to financially provide for his family after being diagnosed with inoperable lung cancer."},{id:2,premium:!1,name:"Shameless",img:"https://img4.goodfon.ru/wallpaper/nbig/8/e2/cameron-monaghan-ethan-cutkosky-shameless-emmy-rossum-bess-1.jpg",description:"The series depicts the poor, dysfunctional family of Frank Gallagher, a neglectful single father of six: Fiona, Phillip, Ian, Debbie, Carl, and Liam. He spends his days drunk, high, or in search of misadventures, while his children learn to take care of themselves."},{id:3,premium:!0,name:"Paper House",img:"https://img5.goodfon.com/wallpaper/nbig/7/75/bumazhnyi-dom-la-casa-de-papel-money-heist-tv-series-serial.jpg",description:"Money Heist (Spanish: La casa de papel, [la ˈkasa ðe paˈpel], lit. 'The House of Paper') is a Spanish heist crime drama television series created by Álex Pina. The series traces two long-prepared heists led by the Professor (Álvaro Morte), one on the Royal Mint of Spain, and one on the Bank of Spain, told from the perspective of one of the robbers, Tokyo (Úrsula Corberó). The narrative is told in a real-time-like fashion and relies on flashbacks, time-jumps, hidden character motivations, and an unreliable narrator for complexity."},{id:4,premium:!0,name:"Better Call Saul",img:"https://www.cheatsheet.com/wp-content/uploads/2020/04/better-call-saul1.jpg",description:"Better Call Saul is an American crime and legal drama television series created by Vince Gilligan and Peter Gould. It is a spin-off, as well as both a prequel and a sequel, to Gilligan's previous series, Breaking Bad. Set primarily in the early to middle part of the first decade of the 2000s in Albuquerque, New Mexico, the series develops Jimmy McGill (Bob Odenkirk), an earnest lawyer and former con artist, into a greedy criminal defense attorney known as Saul Goodman. Also shown is the moral decline of former police officer Mike Ehrmantraut (Jonathan Banks), who becomes a violent fixer for drug traffickers to support his granddaughter and her widowed mother. The show premiered on AMC on February 8, 2015. The sixth and final season consisting of 13 episodes premiered on April 18, 2022, and concluded on August 15, 2022, after six seasons for a total of 63 episodes."},{id:5,premium:!1,name:"The Bridge",img:"https://topic.imgix.net/usq/ba0e4905-4ec9-4856-982a-f8d48d3c660d/6f5981b8-d008-4fe7-9798-94e840e69274.jpeg?auto=compress,format&cs=srgb&h=781&_=0c8c771cf95a53a6108f640a1307dad6&bg=%23ffffff",description:"When a body is found on the bridge between Denmark and Sweden, right on the border, Danish inspector Martin Rohde and Swedish Saga Norén have to share jurisdiction and work together to find the killer."},{id:6,premium:!1,name:"The end of the fun***in world",img:"https://flxt.tmsimg.com/assets/p14695238_b_h8_aa.jpg",description:"A budding teen psychopath and a rebel hungry for adventure embark on a star-crossed road trip in this darkly comic series based on a graphic novel."}];var P={data:()=>({selectedFilm:null,registrated:!1}),methods:{selectFilm(e){this.selectedFilm=e},switchToCurrentFilm(e){let o=localStorage.getItem("user-info");o?(o=JSON.parse(o),e.premium?o.premium?this.$router.push(`/films/${e.id}`):this.$router.push("/no-premium"):this.$router.push(`/films/${e.id}`)):this.$router.push("/no-registration")}},created(){this.films=M}};const A=(0,l.Z)(P,[["render",F],["__scopeId","data-v-230282ca"]]);var q=A;const N={class:"films-layout"},O={class:"filns-layout__body"};function B(e,o,t,r,a,n){const i=(0,s.up)("header-navbar"),l=(0,s.up)("router-view");return(0,s.wg)(),(0,s.iD)("div",N,[(0,s._)("div",O,[(0,s.Wm)(i),(0,s.Wm)(l)])])}const V={class:"header-navbar__container"},j={class:"header-navbar__navbar"},E={class:"header-navbar__item"},U={class:"form-check form-switch"},W={class:"header-navbar__auth"},J={key:0,class:"header-navbar__premium",src:"https://cdn-icons-png.flaticon.com/512/6016/6016804.png",alt:"premium"};function Z(e,o,t,n,i,l){return(0,s.wg)(),(0,s.iD)("div",{class:(0,a.C_)(["header-navbar",{blackTheme:!e.$store.getters.getColorTheme}])},[(0,s._)("div",V,[(0,s._)("div",{class:"header-navbar__logo",onClick:o[0]||(o[0]=(...e)=>l.setFilmsPage&&l.setFilmsPage(...e))},"vuerouter"),(0,s._)("div",j,[(0,s._)("div",E,[(0,s._)("div",U,[(0,s.wy)((0,s._)("input",{onClick:o[1]||(o[1]=(...e)=>l.changeColorTheme&&l.changeColorTheme(...e)),class:"form-check-input",type:"checkbox",role:"switch","onUpdate:modelValue":o[2]||(o[2]=o=>e.checked=o),id:"flexSwitchCheckDefault"},null,512),[[r.e8,e.checked]])])]),(0,s._)("div",{class:"header-navbar__item",onClick:o[3]||(o[3]=(...e)=>l.switchToAuthState&&l.switchToAuthState(...e))},[(0,s._)("div",W,[(0,s._)("span",null,(0,a.zw)(e.signedIn?"watch profile":"sign in"),1),e.$store.getters.getAccountState?((0,s.wg)(),(0,s.iD)("img",J)):(0,s.kq)("",!0)])])])])],2)}var z={data:()=>({signedIn:!1,checked:!1}),methods:{switchToAuthState(){this.signedIn?this.$router.push("/user"):this.$router.push("/user-auth")},changeColorTheme(){this.$store.commit("changeColorTheme"),localStorage.setItem("white-theme",JSON.stringify(this.$store.getters.getColorTheme))},setFilmsPage(){this.$router.push("/films")},checkLocalStorage(){const e=localStorage.getItem("user-info");e&&(this.signedIn=!0)}},created(){this.checked=!this.$store.getters.getColorTheme;const e=localStorage.getItem("white-theme");e?JSON.parse(e)!=this.$store.getters.getColorTheme&&(this.$store.commit("changeColorTheme"),this.checked=!this.$store.getters.getColorTheme):(localStorage.setItem("white-theme",JSON.stringify(!0)),this.checked=this.$store.getters.getColorTheme);let o=localStorage.getItem("user-info");o&&(this.signedIn=!0,o=JSON.parse(o),o.premium!=this.$store.getters.getAccountState&&this.$store.commit("changeAccountState"))},watch:{"$route.path"(){const e=localStorage.getItem("user-info");this.signedIn=!!e}}};const L=(0,l.Z)(z,[["render",Z],["__scopeId","data-v-4d1b29b5"]]);var H=L,G={components:{HeaderNavbar:H}};const Y=(0,l.Z)(G,[["render",B]]);var R=Y;const K=e=>((0,s.dD)("data-v-5a2ff1dc"),e=e(),(0,s.Cn)(),e),X={class:"current-film"},Q={key:0,class:"current-film__body"},ee={class:"current-film__name"},oe=["src"],te={class:"current-film__plot"},re=K((()=>(0,s._)("p",null,"Plot:",-1))),se=K((()=>(0,s._)("br",null,null,-1)));function ae(e,o,t,r,n,i){return(0,s.wg)(),(0,s.iD)("div",X,[n.film?((0,s.wg)(),(0,s.iD)("div",Q,[(0,s._)("div",ee,(0,a.zw)(n.film.name),1),(0,s._)("img",{class:"current-film__image",src:n.film.img},null,8,oe),(0,s._)("div",te,[re,se,(0,s.Uk)((0,a.zw)(n.film.description),1)])])):(0,s.kq)("",!0)])}var ne={data(){return{film:null}},created(){const e=M.find((e=>e.id==this.$route.params.id));e&&(this.film=e)}};const ie=(0,l.Z)(ne,[["render",ae],["__scopeId","data-v-5a2ff1dc"]]);var le=ie;const me=e=>((0,s.dD)("data-v-2506931a"),e=e(),(0,s.Cn)(),e),ce={class:"user-profile"},ue={class:"user-profile__body"},de={class:"form__content"},he={class:"form__body"},fe=me((()=>(0,s._)("label",{class:"form__name form__label"},"Name",-1))),pe={key:0,class:"errorMsg"},_e={class:"form__body"},ge=me((()=>(0,s._)("label",{class:"form__phone form__label"},"Phone",-1))),ve={key:0,class:"errorMsg"},be={class:"form__body"},we=me((()=>(0,s._)("label",{class:"form__email form__label"},"Email address",-1))),ye={key:0,class:"errorMsg"},ke={class:"form__body passwords"},$e={class:"form__body_password"},Ce=me((()=>(0,s._)("label",{class:"form__password form__label"},"Password",-1))),xe={key:0,class:"errorMsg"},Te={class:"form__body_password"},Se=me((()=>(0,s._)("label",{class:"form__passwordConfirmation form__label"},"Confirm the password",-1))),Ie={key:0,class:"errorMsg"},De={class:"form__body"},Fe=me((()=>(0,s._)("label",{class:"form__sex form__label"},"Sex",-1))),Me=me((()=>(0,s._)("option",{selected:"",value:"male"},"male",-1))),Pe=me((()=>(0,s._)("option",{value:"female"},"female",-1))),Ae=me((()=>(0,s._)("option",{value:"other"},"other",-1))),qe=[Me,Pe,Ae],Ne={key:0,class:"errorMsg"},Oe={class:"form__body form__body_checkbox"},Be={class:"form__buttons"};function Ve(e,o,t,n,i,l){return(0,s.wg)(),(0,s.iD)("div",ce,[(0,s._)("div",ue,[(0,s._)("form",{class:(0,a.C_)(["form",{errorForm:e.showFormError}]),onClick:o[21]||(o[21]=o=>e.showFormError=!1)},[(0,s._)("div",de,[(0,s._)("div",he,[fe,(0,s.wy)((0,s._)("input",{onBlur:o[0]||(o[0]=(...e)=>n.v$.form.name.$reset&&n.v$.form.name.$reset(...e)),onFocus:o[1]||(o[1]=(...e)=>n.v$.form.name.$touch&&n.v$.form.name.$touch(...e)),maxlength:"35",autocomplete:"off","onUpdate:modelValue":o[2]||(o[2]=o=>e.form.name=o)},null,544),[[r.nr,e.form.name]]),n.v$.form.name.$error?((0,s.wg)(),(0,s.iD)("div",pe," Min length is 2 symbols ")):(0,s.kq)("",!0)]),(0,s._)("div",_e,[ge,(0,s.wy)((0,s._)("input",{onBlur:o[3]||(o[3]=(...e)=>n.v$.form.phone.$reset&&n.v$.form.phone.$reset(...e)),onFocus:o[4]||(o[4]=(...e)=>n.v$.form.phone.$touch&&n.v$.form.phone.$touch(...e)),maxlength:"35",autocomplete:"off","onUpdate:modelValue":o[5]||(o[5]=o=>e.form.phone=o)},null,544),[[r.nr,e.form.phone]]),n.v$.form.phone.$error?((0,s.wg)(),(0,s.iD)("div",ve," Type real phone ")):(0,s.kq)("",!0)]),(0,s._)("div",be,[we,(0,s.wy)((0,s._)("input",{onBlur:o[6]||(o[6]=(...e)=>n.v$.form.email.$reset&&n.v$.form.email.$reset(...e)),onFocus:o[7]||(o[7]=(...e)=>n.v$.form.email.$touch&&n.v$.form.email.$touch(...e)),autocomplete:"off","onUpdate:modelValue":o[8]||(o[8]=o=>e.form.email=o)},null,544),[[r.nr,e.form.email]]),n.v$.form.email.$error?((0,s.wg)(),(0,s.iD)("div",ye," Type correct email ")):(0,s.kq)("",!0)]),(0,s._)("div",ke,[(0,s._)("div",$e,[Ce,(0,s.wy)((0,s._)("input",{onBlur:o[9]||(o[9]=(...e)=>n.v$.form.password.$reset&&n.v$.form.password.$reset(...e)),onFocus:o[10]||(o[10]=(...e)=>n.v$.form.password.$touch&&n.v$.form.password.$touch(...e)),maxlength:"20",autocomplete:"off","onUpdate:modelValue":o[11]||(o[11]=o=>e.form.password=o),type:"password"},null,544),[[r.nr,e.form.password]]),n.v$.form.password.$error?((0,s.wg)(),(0,s.iD)("div",xe," Min length is 8 symbols. ")):(0,s.kq)("",!0)]),(0,s._)("div",Te,[Se,(0,s.wy)((0,s._)("input",{onBlur:o[12]||(o[12]=(...e)=>n.v$.form.passwordConfirmation.$reset&&n.v$.form.passwordConfirmation.$reset(...e)),onFocus:o[13]||(o[13]=(...e)=>n.v$.form.passwordConfirmation.$touch&&n.v$.form.passwordConfirmation.$touch(...e)),maxlength:"20",autocomplete:"off","onUpdate:modelValue":o[14]||(o[14]=o=>e.form.passwordConfirmation=o),type:"password"},null,544),[[r.nr,e.form.passwordConfirmation]]),n.v$.form.passwordConfirmation.$error?((0,s.wg)(),(0,s.iD)("div",Ie," Passwords don`t match ")):(0,s.kq)("",!0)])]),(0,s._)("div",De,[Fe,(0,s.wy)((0,s._)("select",{onFocus:o[15]||(o[15]=(...e)=>n.v$.form.sex.$touch&&n.v$.form.sex.$touch(...e)),onBlur:o[16]||(o[16]=(...e)=>n.v$.form.sex.$reset&&n.v$.form.sex.$reset(...e)),"onUpdate:modelValue":o[17]||(o[17]=o=>e.form.sex=o),class:"form__select"},qe,544),[[r.bM,e.form.sex]]),n.v$.form.sex.$error?((0,s.wg)(),(0,s.iD)("div",Ne," Select your sex ")):(0,s.kq)("",!0)]),(0,s._)("div",Oe,[(0,s.wy)((0,s._)("input",{autocomplete:"off",type:"checkbox","onUpdate:modelValue":o[18]||(o[18]=o=>e.form.checkbox=o)},null,512),[[r.e8,e.form.checkbox]]),(0,s._)("label",{class:(0,a.C_)(["form__checkbox",{errorMsgCheckbox:!e.form.checkbox}])},"I agree to send form",2)]),(0,s._)("div",Be,[(0,s._)("button",{class:(0,a.C_)(["form__button form__button_submit",{blackTheme:!e.$store.getters.getColorTheme}]),onClick:o[19]||(o[19]=(0,r.iM)(((...e)=>l.submitForm&&l.submitForm(...e)),["prevent","stop"]))}," Submit ",2),(0,s._)("button",{onClick:o[20]||(o[20]=(0,r.iM)(((...e)=>l.resetForm&&l.resetForm(...e)),["prevent"])),class:(0,a.C_)(["form__button form__button_reset",{blackTheme:!e.$store.getters.getColorTheme}])}," Reset ",2)])])],2)])])}var je=t(4028),Ee=t(2587),Ue={setup(){return{v$:(0,je.Xw)()}},data:()=>({userData:!1,showFormError:!1,form:{name:"",email:"",phone:"",password:"",passwordConfirmation:"",sex:"male",checkbox:""}}),methods:{async submitForm(){const e=await this.v$.$validate();e?(localStorage.setItem("user-info",JSON.stringify(this.form)),this.resetForm(),this.$router.push("/user")):this.showFormError=!0},resetForm(){for(let e in this.form)this.form[e]="";this.form.sex="male"}},validations(){return{form:{name:{nameMinLength:(0,Ee.Ei)(2),required:Ee.C1},phone:{phoneMinLength:(0,Ee.Ei)(2),phoneValidator(e){return!isNaN(e)},required:Ee.C1},email:{emailMinLength:(0,Ee.Ei)(8),emaillValidation:Ee.Do,required:Ee.C1},password:{passwordMinLength:(0,Ee.Ei)(8),required:Ee.C1},passwordConfirmation:{passwordMinLength:(0,Ee.Ei)(8),passwordConfirmationConfirm:(0,Ee.sH)(this.form.password),required:Ee.C1},sex:{required:Ee.C1},checkbox:{checkboxValidator(e){return 1==e}},required:Ee.C1}}}};const We=(0,l.Z)(Ue,[["render",Ve],["__scopeId","data-v-2506931a"]]);var Je=We;const Ze=e=>((0,s.dD)("data-v-4f45c469"),e=e(),(0,s.Cn)(),e),ze={class:"user-info"},Le={key:0,class:"user-info__body"},He={class:"user-info__row"},Ge={class:"user-info__name"},Ye={class:"user-info__row"},Re={class:"user-info__sex"},Ke={class:"user-info__row"},Xe={class:"user-info__phone"},Qe={class:"user-info__row"},eo={class:"user-info__email"},oo={key:0,class:"user-info__row"},to=Ze((()=>(0,s._)("p",{style:{"margin-bottom":"10px"}},"Status: no premium",-1))),ro={key:1,style:{"margin-bottom":"0px"}},so={class:"user-info__row"};function ao(e,o,t,n,i,l){return(0,s.wg)(),(0,s.iD)("div",ze,[e.userInfo?((0,s.wg)(),(0,s.iD)("div",Le,[(0,s._)("div",He,[(0,s._)("div",Ge,(0,a.zw)(e.userInfo.name),1)]),(0,s._)("div",Ye,[(0,s._)("div",Re,"Sex: "+(0,a.zw)(e.userInfo.sex),1)]),(0,s._)("div",Ke,[(0,s._)("div",Xe,(0,a.zw)(e.userInfo.phone),1)]),(0,s._)("div",Qe,[(0,s._)("div",eo,(0,a.zw)(e.userInfo.email),1)]),e.premiumState?((0,s.wg)(),(0,s.iD)("p",ro,"Status: premium")):((0,s.wg)(),(0,s.iD)("div",oo,[to,(0,s._)("button",{class:(0,a.C_)([{blackTheme:!e.$store.getters.getColorTheme},"user-info__premium user-info__button"]),onClick:o[0]||(o[0]=(0,r.iM)(((...e)=>l.switchToPremiumPaymentForm&&l.switchToPremiumPaymentForm(...e)),["prevent"]))}," buy premium ",2)])),(0,s._)("div",so,[(0,s._)("button",{class:(0,a.C_)(["user-info-delete user-info__button",{blackTheme:!e.$store.getters.getColorTheme}]),onClick:o[1]||(o[1]=(0,r.iM)(((...e)=>l.deleteUser&&l.deleteUser(...e)),["prevent"]))}," sign out ",2)])])):(0,s.kq)("",!0)])}var no={data:()=>({userInfo:null,premiumState:!1}),methods:{deleteUser(){const e=window.confirm(`Confirm deletion of "${this.userInfo.name}"`);e&&(localStorage.removeItem("user-info"),this.$router.push("/films"),this.$store.commit("changeAccountState"))},switchToPremiumPaymentForm(){this.$router.push("/user/premium")}},created(){const e=localStorage.getItem("user-info");e&&(this.userInfo=JSON.parse(e),this.userInfo.premium&&(this.premiumState=!0))}};const io=(0,l.Z)(no,[["render",ao],["__scopeId","data-v-4f45c469"]]);var lo=io;const mo=e=>((0,s.dD)("data-v-13700311"),e=e(),(0,s.Cn)(),e),co={class:"payment-form"},uo={class:"payment-form__body"},ho={class:"container p-0"},fo=mo((()=>(0,s._)("p",{class:"h8 py-3"},"Payment Details",-1))),po={class:"row gx-3"},_o={class:"col-12"},go={class:"d-flex flex-column"},vo=mo((()=>(0,s._)("p",{class:"text mb-1"},"Person Name",-1))),bo={class:"col-12"},wo={class:"d-flex flex-column"},yo=mo((()=>(0,s._)("p",{class:"text mb-1"},"Card Number",-1))),ko={class:"col-6"},$o={class:"d-flex flex-column"},Co=mo((()=>(0,s._)("p",{class:"text mb-1"},"Expiry",-1))),xo={class:"col-6"},To={class:"d-flex flex-column"},So=mo((()=>(0,s._)("p",{class:"text mb-1"},"CVV/CVC",-1))),Io=mo((()=>(0,s._)("span",{style:{color:"#000"},class:"ps-3"},"Pay $9",-1))),Do=mo((()=>(0,s._)("span",{class:"fas fa-arrow-right"},null,-1))),Fo=[Io,Do];function Mo(e,o,t,r,n,i){return(0,s.wg)(),(0,s.iD)("div",co,[(0,s._)("div",uo,[(0,s._)("div",ho,[(0,s._)("div",{class:(0,a.C_)(["card px-4",{blackThemeCard:!e.$store.getters.getColorTheme}])},[fo,(0,s._)("div",po,[(0,s._)("div",_o,[(0,s._)("div",go,[vo,(0,s._)("input",{class:(0,a.C_)([{blackThemeInput:!e.$store.getters.getColorTheme},"form-control mb-3"]),style:{color:"#000"},type:"text",placeholder:"Name",value:"Barry Allen"},null,2)])]),(0,s._)("div",bo,[(0,s._)("div",wo,[yo,(0,s._)("input",{class:(0,a.C_)([{blackThemeInput:!e.$store.getters.getColorTheme},"form-control mb-3"]),type:"text",placeholder:"1234 5678 435678"},null,2)])]),(0,s._)("div",ko,[(0,s._)("div",$o,[Co,(0,s._)("input",{class:(0,a.C_)([{blackThemeInput:!e.$store.getters.getColorTheme},"form-control mb-3"]),type:"text",placeholder:"MM/YYYY"},null,2)])]),(0,s._)("div",xo,[(0,s._)("div",To,[So,(0,s._)("input",{class:(0,a.C_)([{blackThemeInput:!e.$store.getters.getColorTheme},"form-control mb-3 pt-2"]),type:"password",placeholder:"***"},null,2)])]),(0,s._)("div",{class:"col-12",onClick:o[0]||(o[0]=(...e)=>i.setPremiumState&&i.setPremiumState(...e))},[(0,s._)("div",{class:(0,a.C_)(["btn btn-primary mb-3",{blackThemeInput:!e.$store.getters.getColorTheme}])},Fo,2)])])],2)])])])}var Po={methods:{setPremiumState(){const e=JSON.parse(localStorage.getItem("user-info"));e["premium"]=!0,localStorage.setItem("user-info",JSON.stringify(e)),this.$router.push("/user"),this.$store.commit("changeAccountState")}}};const Ao=(0,l.Z)(Po,[["render",Mo],["__scopeId","data-v-13700311"]]);var qo=Ao;const No=e=>((0,s.dD)("data-v-c2b4407c"),e=e(),(0,s.Cn)(),e),Oo={class:"no-registration"},Bo={class:"no-registration__body"},Vo=No((()=>(0,s._)("div",{class:"no-registation__title"},"No access",-1))),jo=No((()=>(0,s._)("div",{class:"no-registation__text"}," For watching films info you need to sign in ",-1))),Eo={class:"no-registation__buttons"},Uo=No((()=>(0,s._)("button",{class:"no-registration__button"}," To films ",-1))),Wo=No((()=>(0,s._)("button",{class:"no-registration__button"},"Sign in",-1)));function Jo(e,o){const t=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("div",Oo,[(0,s._)("div",Bo,[Vo,jo,(0,s._)("div",Eo,[(0,s.Wm)(t,{to:"/films"},{default:(0,s.w5)((()=>[Uo])),_:1}),(0,s.Wm)(t,{to:"/user-auth"},{default:(0,s.w5)((()=>[Wo])),_:1})])])])}const Zo={},zo=(0,l.Z)(Zo,[["render",Jo],["__scopeId","data-v-c2b4407c"]]);var Lo=zo;const Ho=e=>((0,s.dD)("data-v-ffde182e"),e=e(),(0,s.Cn)(),e),Go={class:"no-premium"},Yo={class:"no-premium__body"},Ro=Ho((()=>(0,s._)("div",{class:"no-registation__title"},"No access",-1))),Ko=Ho((()=>(0,s._)("div",{class:"no-registation__text"}," For watching some films you need to buy premium status ",-1))),Xo={class:"no-registation__buttons"},Qo=Ho((()=>(0,s._)("button",{class:"no-premium__button"},"To films",-1))),et=Ho((()=>(0,s._)("button",{class:"no-premium__button"},"Premium",-1)));function ot(e,o){const t=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("div",Go,[(0,s._)("div",Yo,[Ro,Ko,(0,s._)("div",Xo,[(0,s.Wm)(t,{to:"/films"},{default:(0,s.w5)((()=>[Qo])),_:1}),(0,s.Wm)(t,{to:"/user/premium"},{default:(0,s.w5)((()=>[et])),_:1})])])])}const tt={},rt=(0,l.Z)(tt,[["render",ot],["__scopeId","data-v-ffde182e"]]);var st=rt,at=(0,u.p7)({history:(0,u.r5)(),routes:[{path:"/:pathMatch(.*)*",redirect:"/films"},{path:"/",name:"main",component:w},{path:"/films",name:"films",component:q},{path:"/films/:id",name:"film",component:le},{path:"/user-auth",name:"userAuthefication",component:Je},{path:"/user",name:"user",component:lo},{path:"/user/premium",name:"premium",component:qo},{path:"/no-premium",name:"premiumWarning",component:st},{path:"/no-registration",name:"registationWarning",component:Lo},{path:"/films",name:"filmsLayout",component:R,children:[{path:"",name:"films",component:q},{path:":id",name:"film",component:le},{path:"/user-auth",name:"userAuthefication",component:Je},{path:"/user",name:"user",component:lo},{path:"/user/premium",name:"premium",component:qo}]}]}),nt=t(3907),it=(0,nt.MT)({state(){return{whiteTheme:!0,premiumAccount:!1}},getters:{getColorTheme(e){return e.whiteTheme},getAccountState(e){return e.premiumAccount}},mutations:{changeColorTheme(e){e.whiteTheme=!e.whiteTheme},changeAccountState(e){e.premiumAccount=!e.premiumAccount}},actions:{}});const lt=(0,r.ri)(c);lt.use(at),lt.use(it),lt.mount("#app")}},o={};function t(r){var s=o[r];if(void 0!==s)return s.exports;var a=o[r]={exports:{}};return e[r](a,a.exports,t),a.exports}t.m=e,function(){var e=[];t.O=function(o,r,s,a){if(!r){var n=1/0;for(c=0;c<e.length;c++){r=e[c][0],s=e[c][1],a=e[c][2];for(var i=!0,l=0;l<r.length;l++)(!1&a||n>=a)&&Object.keys(t.O).every((function(e){return t.O[e](r[l])}))?r.splice(l--,1):(i=!1,a<n&&(n=a));if(i){e.splice(c--,1);var m=s();void 0!==m&&(o=m)}}return o}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[r,s,a]}}(),function(){t.d=function(e,o){for(var r in o)t.o(o,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:o[r]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)}}(),function(){var e={143:0};t.O.j=function(o){return 0===e[o]};var o=function(o,r){var s,a,n=r[0],i=r[1],l=r[2],m=0;if(n.some((function(o){return 0!==e[o]}))){for(s in i)t.o(i,s)&&(t.m[s]=i[s]);if(l)var c=l(t)}for(o&&o(r);m<n.length;m++)a=n[m],t.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return t.O(c)},r=self["webpackChunkvuerouter"]=self["webpackChunkvuerouter"]||[];r.forEach(o.bind(null,0)),r.push=o.bind(null,r.push.bind(r))}();var r=t.O(void 0,[998],(function(){return t(9651)}));r=t.O(r)})();
//# sourceMappingURL=app.04aee82b.js.map