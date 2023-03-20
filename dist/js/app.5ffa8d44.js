(function(){"use strict";var e={5051:function(e,o,r){var s=r(9963),t=r(6252);const a={id:"app"};function i(e,o,r,s,i,n){const l=(0,t.up)("router-view");return(0,t.wg)(),(0,t.iD)("div",a,[(0,t.Wm)(l)])}var n={name:"app"},l=r(3744);const m=(0,l.Z)(n,[["render",i]]);var c=m,d=r(2201);const u=e=>((0,t.dD)("data-v-7212be66"),e=e(),(0,t.Cn)(),e),f={class:"main-page"},p={class:"main-page__body"},h={class:"main-page__button"},_=u((()=>(0,t._)("button",{class:"button__body"},"Start",-1)));function v(e,o){const r=(0,t.up)("router-link");return(0,t.wg)(),(0,t.iD)("div",f,[(0,t._)("div",p,[(0,t._)("div",h,[(0,t.Wm)(r,{to:"/films"},{default:(0,t.w5)((()=>[_])),_:1})])])])}const g={},b=(0,l.Z)(g,[["render",v],["__scopeId","data-v-7212be66"]]);var w=b,y=r(3577);const k={class:"films-carousel"},$={class:"films-carousel__body"},x={class:"films__container"},C=["onMouseover"],S={class:"film__body"},D={class:"image"},F={class:"image__name"},I={key:0,class:"image__premium",src:"https://cdn-icons-png.flaticon.com/512/6016/6016804.png",alt:"premium"},M=["src"],P=["onClick"];function q(e,o,r,s,a,i){return(0,t.wg)(),(0,t.iD)("div",k,[(0,t._)("div",$,[(0,t._)("div",x,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(e.films,(e=>((0,t.wg)(),(0,t.iD)("div",{class:"film",key:e,onMouseover:o=>i.selectFilm(e)},[(0,t._)("div",S,[(0,t._)("div",D,[(0,t._)("div",F,[(0,t.Uk)((0,y.zw)(e.name)+" ",1),e.premium?((0,t.wg)(),(0,t.iD)("img",I)):(0,t.kq)("",!0)]),(0,t._)("img",{src:e.img},null,8,M),(0,t._)("div",{class:"image__background",onClick:o=>i.switchToCurrentFilm(e)},null,8,P)])])],40,C)))),128))])])])}r(7658);let T=[{id:1,premium:!0,name:"Breaking Bad",img:"https://img2.goodfon.ru/wallpaper/nbig/b/a5/vo-vse-tyazhkie-breaking-bad-3918.jpg",description:"Set in Albuquerque, New Mexico, between 2008 and 2010, Breaking Bad follows Walter White, a modest high school chemistry teacher who transforms into a ruthless kingpin in the local methamphetamine drug trade, driven to financially provide for his family after being diagnosed with inoperable lung cancer."},{id:2,premium:!1,name:"Shameless",img:"https://img4.goodfon.ru/wallpaper/nbig/8/e2/cameron-monaghan-ethan-cutkosky-shameless-emmy-rossum-bess-1.jpg",description:"The series depicts the poor, dysfunctional family of Frank Gallagher, a neglectful single father of six: Fiona, Phillip, Ian, Debbie, Carl, and Liam. He spends his days drunk, high, or in search of misadventures, while his children learn to take care of themselves."},{id:3,premium:!0,name:"Paper House",img:"https://img5.goodfon.com/wallpaper/nbig/7/75/bumazhnyi-dom-la-casa-de-papel-money-heist-tv-series-serial.jpg",description:"Money Heist (Spanish: La casa de papel, [la ˈkasa ðe paˈpel], lit. 'The House of Paper') is a Spanish heist crime drama television series created by Álex Pina. The series traces two long-prepared heists led by the Professor (Álvaro Morte), one on the Royal Mint of Spain, and one on the Bank of Spain, told from the perspective of one of the robbers, Tokyo (Úrsula Corberó). The narrative is told in a real-time-like fashion and relies on flashbacks, time-jumps, hidden character motivations, and an unreliable narrator for complexity."},{id:4,premium:!0,name:"Better Call Saul",img:"https://www.cheatsheet.com/wp-content/uploads/2020/04/better-call-saul1.jpg",description:"Better Call Saul is an American crime and legal drama television series created by Vince Gilligan and Peter Gould. It is a spin-off, as well as both a prequel and a sequel, to Gilligan's previous series, Breaking Bad. Set primarily in the early to middle part of the first decade of the 2000s in Albuquerque, New Mexico, the series develops Jimmy McGill (Bob Odenkirk), an earnest lawyer and former con artist, into a greedy criminal defense attorney known as Saul Goodman. Also shown is the moral decline of former police officer Mike Ehrmantraut (Jonathan Banks), who becomes a violent fixer for drug traffickers to support his granddaughter and her widowed mother. The show premiered on AMC on February 8, 2015. The sixth and final season consisting of 13 episodes premiered on April 18, 2022, and concluded on August 15, 2022, after six seasons for a total of 63 episodes."},{id:5,premium:!1,name:"The Bridge",img:"https://topic.imgix.net/usq/ba0e4905-4ec9-4856-982a-f8d48d3c660d/6f5981b8-d008-4fe7-9798-94e840e69274.jpeg?auto=compress,format&cs=srgb&h=781&_=0c8c771cf95a53a6108f640a1307dad6&bg=%23ffffff",description:"When a body is found on the bridge between Denmark and Sweden, right on the border, Danish inspector Martin Rohde and Swedish Saga Norén have to share jurisdiction and work together to find the killer."},{id:6,premium:!1,name:"The end of the fun***in world",img:"https://flxt.tmsimg.com/assets/p14695238_b_h8_aa.jpg",description:"A budding teen psychopath and a rebel hungry for adventure embark on a star-crossed road trip in this darkly comic series based on a graphic novel."}];var B={data:()=>({selectedFilm:null,registrated:!1}),methods:{selectFilm(e){this.selectedFilm=e},switchToCurrentFilm(e){let o=localStorage.getItem("user-info");o?(o=JSON.parse(o),e.premium?o.premium?this.$router.push(`/films/${e.id}`):this.$router.push("/no-premium"):this.$router.push(`/films/${e.id}`)):this.$router.push("/no-registration")}},created(){this.films=T}};const N=(0,l.Z)(B,[["render",q],["__scopeId","data-v-6f560358"]]);var O=N;const j={class:"films-layout"},A={class:"filns-layout__body"};function E(e,o,r,s,a,i){const n=(0,t.up)("header-navbar"),l=(0,t.up)("router-view");return(0,t.wg)(),(0,t.iD)("div",j,[(0,t._)("div",A,[(0,t.Wm)(n),(0,t.Wm)(l)])])}const V=e=>((0,t.dD)("data-v-051f89f6"),e=e(),(0,t.Cn)(),e),W={class:"header-navbar"},U={class:"header-navbar__container"},Z=V((()=>(0,t._)("p",null,"vuerouter",-1))),z=[Z],L={class:"header-navbar__navbar"},H={class:"header-navbar__auth"};function J(e,o,r,s,a,i){return(0,t.wg)(),(0,t.iD)("div",W,[(0,t._)("div",U,[(0,t._)("div",{class:"header-navbar__logo",onClick:o[0]||(o[0]=(...e)=>i.setFilmsPage&&i.setFilmsPage(...e))},z),(0,t._)("div",L,[(0,t._)("div",{class:"header-navbar__item",onClick:o[1]||(o[1]=(...e)=>i.switchToAuthState&&i.switchToAuthState(...e))},[(0,t._)("div",H,(0,y.zw)(e.signedIn?"watch profile":"sign in"),1)])])])])}var G={data:()=>({signedIn:!1}),methods:{switchToAuthState(){this.signedIn?this.$router.push("/user"):this.$router.push("/user-auth")},setFilmsPage(){this.$router.push("/films")},checkLocalStorage(){const e=localStorage.getItem("user-info");e&&(this.signedIn=!0)}},created(){const e=localStorage.getItem("user-info");e&&(this.signedIn=!0)},watch:{"$route.path"(){const e=localStorage.getItem("user-info");this.signedIn=!!e}}};const Y=(0,l.Z)(G,[["render",J],["__scopeId","data-v-051f89f6"]]);var R=Y,K={components:{HeaderNavbar:R}};const X=(0,l.Z)(K,[["render",E]]);var Q=X;const ee=e=>((0,t.dD)("data-v-6a0c5e70"),e=e(),(0,t.Cn)(),e),oe={class:"current-film"},re={key:0,class:"current-film__body"},se={class:"current-film__name"},te=["src"],ae={class:"current-film__plot"},ie=ee((()=>(0,t._)("p",null,"Plot:",-1))),ne=ee((()=>(0,t._)("br",null,null,-1)));function le(e,o,r,s,a,i){return(0,t.wg)(),(0,t.iD)("div",oe,[a.film?((0,t.wg)(),(0,t.iD)("div",re,[(0,t._)("div",se,(0,y.zw)(a.film.name),1),(0,t._)("img",{class:"current-film__image",src:a.film.img},null,8,te),(0,t._)("div",ae,[ie,ne,(0,t.Uk)((0,y.zw)(a.film.description),1)])])):(0,t.kq)("",!0)])}var me={data(){return{film:null}},created(){const e=T.find((e=>e.id==this.$route.params.id));e&&(this.film=e)}};const ce=(0,l.Z)(me,[["render",le],["__scopeId","data-v-6a0c5e70"]]);var de=ce;const ue=e=>((0,t.dD)("data-v-dfd7824e"),e=e(),(0,t.Cn)(),e),fe={class:"user-profile"},pe={class:"user-profile__body"},he={class:"form__content"},_e={class:"form__body"},ve=ue((()=>(0,t._)("label",{class:"form__name form__label"},"Name",-1))),ge={key:0,class:"errorMsg"},be={class:"form__body"},we=ue((()=>(0,t._)("label",{class:"form__phone form__label"},"Phone",-1))),ye={key:0,class:"errorMsg"},ke={class:"form__body"},$e=ue((()=>(0,t._)("label",{class:"form__email form__label"},"Email address",-1))),xe={key:0,class:"errorMsg"},Ce={class:"form__body passwords"},Se={class:"form__body_password"},De=ue((()=>(0,t._)("label",{class:"form__password form__label"},"Password",-1))),Fe={key:0,class:"errorMsg"},Ie={class:"form__body_password"},Me=ue((()=>(0,t._)("label",{class:"form__passwordConfirmation form__label"},"Confirm the password",-1))),Pe={key:0,class:"errorMsg"},qe={class:"form__body"},Te=ue((()=>(0,t._)("label",{class:"form__sex form__label"},"Sex",-1))),Be=ue((()=>(0,t._)("option",{selected:"",value:"male"},"male",-1))),Ne=ue((()=>(0,t._)("option",{value:"female"},"female",-1))),Oe=ue((()=>(0,t._)("option",{value:"other"},"other",-1))),je=[Be,Ne,Oe],Ae={key:0,class:"errorMsg"},Ee={class:"form__body form__body_checkbox"},Ve={class:"form__buttons"};function We(e,o,r,a,i,n){return(0,t.wg)(),(0,t.iD)("div",fe,[(0,t._)("div",pe,[(0,t._)("form",{class:(0,y.C_)(["form",{errorForm:e.showFormError}]),onClick:o[21]||(o[21]=o=>e.showFormError=!1)},[(0,t._)("div",he,[(0,t._)("div",_e,[ve,(0,t.wy)((0,t._)("input",{onBlur:o[0]||(o[0]=(...e)=>a.v$.form.name.$reset&&a.v$.form.name.$reset(...e)),onFocus:o[1]||(o[1]=(...e)=>a.v$.form.name.$touch&&a.v$.form.name.$touch(...e)),maxlength:"35",autocomplete:"off","onUpdate:modelValue":o[2]||(o[2]=o=>e.form.name=o)},null,544),[[s.nr,e.form.name]]),a.v$.form.name.$error?((0,t.wg)(),(0,t.iD)("div",ge," Min length is 2 symbols ")):(0,t.kq)("",!0)]),(0,t._)("div",be,[we,(0,t.wy)((0,t._)("input",{onBlur:o[3]||(o[3]=(...e)=>a.v$.form.phone.$reset&&a.v$.form.phone.$reset(...e)),onFocus:o[4]||(o[4]=(...e)=>a.v$.form.phone.$touch&&a.v$.form.phone.$touch(...e)),maxlength:"35",autocomplete:"off","onUpdate:modelValue":o[5]||(o[5]=o=>e.form.phone=o)},null,544),[[s.nr,e.form.phone]]),a.v$.form.phone.$error?((0,t.wg)(),(0,t.iD)("div",ye," Type real phone ")):(0,t.kq)("",!0)]),(0,t._)("div",ke,[$e,(0,t.wy)((0,t._)("input",{onBlur:o[6]||(o[6]=(...e)=>a.v$.form.email.$reset&&a.v$.form.email.$reset(...e)),onFocus:o[7]||(o[7]=(...e)=>a.v$.form.email.$touch&&a.v$.form.email.$touch(...e)),autocomplete:"off","onUpdate:modelValue":o[8]||(o[8]=o=>e.form.email=o)},null,544),[[s.nr,e.form.email]]),a.v$.form.email.$error?((0,t.wg)(),(0,t.iD)("div",xe," Type correct email ")):(0,t.kq)("",!0)]),(0,t._)("div",Ce,[(0,t._)("div",Se,[De,(0,t.wy)((0,t._)("input",{onBlur:o[9]||(o[9]=(...e)=>a.v$.form.password.$reset&&a.v$.form.password.$reset(...e)),onFocus:o[10]||(o[10]=(...e)=>a.v$.form.password.$touch&&a.v$.form.password.$touch(...e)),maxlength:"20",autocomplete:"off","onUpdate:modelValue":o[11]||(o[11]=o=>e.form.password=o),type:"password"},null,544),[[s.nr,e.form.password]]),a.v$.form.password.$error?((0,t.wg)(),(0,t.iD)("div",Fe," Password has an error. ")):(0,t.kq)("",!0)]),(0,t._)("div",Ie,[Me,(0,t.wy)((0,t._)("input",{onBlur:o[12]||(o[12]=(...e)=>a.v$.form.passwordConfirmation.$reset&&a.v$.form.passwordConfirmation.$reset(...e)),onFocus:o[13]||(o[13]=(...e)=>a.v$.form.passwordConfirmation.$touch&&a.v$.form.passwordConfirmation.$touch(...e)),maxlength:"20",autocomplete:"off","onUpdate:modelValue":o[14]||(o[14]=o=>e.form.passwordConfirmation=o),type:"password"},null,544),[[s.nr,e.form.passwordConfirmation]]),a.v$.form.passwordConfirmation.$error?((0,t.wg)(),(0,t.iD)("div",Pe," Passwords don`t match ")):(0,t.kq)("",!0)])]),(0,t._)("div",qe,[Te,(0,t.wy)((0,t._)("select",{onFocus:o[15]||(o[15]=(...e)=>a.v$.form.sex.$touch&&a.v$.form.sex.$touch(...e)),onBlur:o[16]||(o[16]=(...e)=>a.v$.form.sex.$reset&&a.v$.form.sex.$reset(...e)),"onUpdate:modelValue":o[17]||(o[17]=o=>e.form.sex=o),class:"form__select"},je,544),[[s.bM,e.form.sex]]),a.v$.form.sex.$error?((0,t.wg)(),(0,t.iD)("div",Ae," Select your sex ")):(0,t.kq)("",!0)]),(0,t._)("div",Ee,[(0,t.wy)((0,t._)("input",{autocomplete:"off",type:"checkbox","onUpdate:modelValue":o[18]||(o[18]=o=>e.form.checkbox=o)},null,512),[[s.e8,e.form.checkbox]]),(0,t._)("label",{class:(0,y.C_)(["form__checkbox",{errorMsgCheckbox:!e.form.checkbox}])},"I agree to send form",2)]),(0,t._)("div",Ve,[(0,t._)("button",{class:"form__button form__button_submit",onClick:o[19]||(o[19]=(0,s.iM)(((...e)=>n.submitForm&&n.submitForm(...e)),["prevent","stop"]))}," Submit "),(0,t._)("button",{onClick:o[20]||(o[20]=(0,s.iM)(((...e)=>n.resetForm&&n.resetForm(...e)),["prevent"])),class:"form__button form__button_reset"}," Reset ")])])],2)])])}var Ue=r(4028),Ze=r(2587),ze={setup(){return{v$:(0,Ue.Xw)()}},data:()=>({userData:!1,showFormError:!1,form:{name:"",age:"",email:"",phone:"",password:"",passwordConfirmation:"",sex:"male",checkbox:""}}),methods:{async submitForm(){const e=await this.v$.$validate();e?(localStorage.setItem("user-info",JSON.stringify(this.form)),this.resetForm(),this.$router.push("/user")):this.showFormError=!0},resetForm(){for(let e in this.form)this.form[e]="";this.form.sex="male"}},validations(){return{form:{name:{nameMinLength:(0,Ze.Ei)(2),required:Ze.C1},phone:{phoneMinLength:(0,Ze.Ei)(2),phoneValidator(e){return!isNaN(e)},required:Ze.C1},email:{emailMinLength:(0,Ze.Ei)(8),emaillValidation:Ze.Do,required:Ze.C1},password:{passwordMinLength:(0,Ze.Ei)(8),required:Ze.C1},passwordConfirmation:{passwordMinLength:(0,Ze.Ei)(8),passwordConfirmationConfirm:(0,Ze.sH)(this.form.password),required:Ze.C1},sex:{required:Ze.C1},checkbox:{checkboxValidator(e){return 1==e}},required:Ze.C1}}}};const Le=(0,l.Z)(ze,[["render",We],["__scopeId","data-v-dfd7824e"]]);var He=Le;const Je=e=>((0,t.dD)("data-v-48651301"),e=e(),(0,t.Cn)(),e),Ge={class:"user-info"},Ye={key:0,class:"user-info__body"},Re={class:"user-info__row"},Ke={class:"user-info__name"},Xe={class:"user-info__row"},Qe={class:"user-info__sex"},eo={class:"user-info__row"},oo={class:"user-info__phone"},ro={class:"user-info__row"},so={class:"user-info__email"},to={key:0,class:"user-info__row"},ao=Je((()=>(0,t._)("p",{style:{"margin-bottom":"10px"}},"Status: no premium",-1))),io={key:1,style:{"margin-bottom":"0px"}},no={class:"user-info__row"};function lo(e,o,r,a,i,n){return(0,t.wg)(),(0,t.iD)("div",Ge,[e.userInfo?((0,t.wg)(),(0,t.iD)("div",Ye,[(0,t._)("div",Re,[(0,t._)("div",Ke,(0,y.zw)(e.userInfo.name),1)]),(0,t._)("div",Xe,[(0,t._)("div",Qe,"Sex: "+(0,y.zw)(e.userInfo.sex),1)]),(0,t._)("div",eo,[(0,t._)("div",oo,(0,y.zw)(e.userInfo.phone),1)]),(0,t._)("div",ro,[(0,t._)("div",so,(0,y.zw)(e.userInfo.email),1)]),e.premiumState?((0,t.wg)(),(0,t.iD)("p",io,"Status: premium")):((0,t.wg)(),(0,t.iD)("div",to,[ao,(0,t._)("button",{class:"user-info__premium user-info__button",onClick:o[0]||(o[0]=(0,s.iM)(((...e)=>n.switchToPremiumPaymentForm&&n.switchToPremiumPaymentForm(...e)),["prevent"]))}," buy premium ")])),(0,t._)("div",no,[(0,t._)("button",{class:"user-info-delete user-info__button",onClick:o[1]||(o[1]=(0,s.iM)(((...e)=>n.deleteUser&&n.deleteUser(...e)),["prevent"]))}," sign out ")])])):(0,t.kq)("",!0)])}var mo={data:()=>({userInfo:null,premiumState:!1}),methods:{deleteUser(){const e=window.confirm(`Confirm deletion of "${this.userInfo.name}"`);e&&(localStorage.removeItem("user-info"),this.$router.push("/films"))},switchToPremiumPaymentForm(){this.$router.push("/user/premium")}},created(){const e=localStorage.getItem("user-info");e&&(this.userInfo=JSON.parse(e),this.userInfo.premium&&(this.premiumState=!0))}};const co=(0,l.Z)(mo,[["render",lo],["__scopeId","data-v-48651301"]]);var uo=co;const fo=e=>((0,t.dD)("data-v-241c91fc"),e=e(),(0,t.Cn)(),e),po={class:"payment-form"},ho={class:"payment-form__body"},_o={class:"container p-0"},vo={class:"card px-4"},go=fo((()=>(0,t._)("p",{class:"h8 py-3"},"Payment Details",-1))),bo={class:"row gx-3"},wo=(0,t.uE)('<div class="col-12" data-v-241c91fc><div class="d-flex flex-column" data-v-241c91fc><p class="text mb-1" data-v-241c91fc>Person Name</p><input style="color:#000;" class="form-control mb-3" type="text" placeholder="Name" value="Barry Allen" data-v-241c91fc></div></div><div class="col-12" data-v-241c91fc><div class="d-flex flex-column" data-v-241c91fc><p class="text mb-1" data-v-241c91fc>Card Number</p><input class="form-control mb-3" type="text" placeholder="1234 5678 435678" data-v-241c91fc></div></div><div class="col-6" data-v-241c91fc><div class="d-flex flex-column" data-v-241c91fc><p class="text mb-1" data-v-241c91fc>Expiry</p><input class="form-control mb-3" type="text" placeholder="MM/YYYY" data-v-241c91fc></div></div><div class="col-6" data-v-241c91fc><div class="d-flex flex-column" data-v-241c91fc><p class="text mb-1" data-v-241c91fc>CVV/CVC</p><input class="form-control mb-3 pt-2" type="password" placeholder="***" data-v-241c91fc></div></div>',4),yo=fo((()=>(0,t._)("div",{class:"btn btn-primary mb-3"},[(0,t._)("span",{style:{color:"#000"},class:"ps-3"},"Pay $9"),(0,t._)("span",{class:"fas fa-arrow-right"})],-1))),ko=[yo];function $o(e,o,r,s,a,i){return(0,t.wg)(),(0,t.iD)("div",po,[(0,t._)("div",ho,[(0,t._)("div",_o,[(0,t._)("div",vo,[go,(0,t._)("div",bo,[wo,(0,t._)("div",{class:"col-12",onClick:o[0]||(o[0]=(...e)=>i.setPremiumState&&i.setPremiumState(...e))},ko)])])])])])}var xo={methods:{setPremiumState(){const e=JSON.parse(localStorage.getItem("user-info"));e["premium"]=!0,localStorage.setItem("user-info",JSON.stringify(e)),this.$router.push("/user")}}};const Co=(0,l.Z)(xo,[["render",$o],["__scopeId","data-v-241c91fc"]]);var So=Co;const Do=e=>((0,t.dD)("data-v-ca1b9ebc"),e=e(),(0,t.Cn)(),e),Fo={class:"no-registration"},Io={class:"no-registration__body"},Mo=Do((()=>(0,t._)("div",{class:"no-registation__title"},"No access",-1))),Po=Do((()=>(0,t._)("div",{class:"no-registation__text"}," For watching films info you need to sign in ",-1))),qo={class:"no-registation__buttons"},To=Do((()=>(0,t._)("button",{class:"no-registration__button"}," To films ",-1))),Bo=Do((()=>(0,t._)("button",{class:"no-registration__button"},"Sign in",-1)));function No(e,o){const r=(0,t.up)("router-link");return(0,t.wg)(),(0,t.iD)("div",Fo,[(0,t._)("div",Io,[Mo,Po,(0,t._)("div",qo,[(0,t.Wm)(r,{to:"/films"},{default:(0,t.w5)((()=>[To])),_:1}),(0,t.Wm)(r,{to:"/user-auth"},{default:(0,t.w5)((()=>[Bo])),_:1})])])])}const Oo={},jo=(0,l.Z)(Oo,[["render",No],["__scopeId","data-v-ca1b9ebc"]]);var Ao=jo;const Eo=e=>((0,t.dD)("data-v-4c7bdd1b"),e=e(),(0,t.Cn)(),e),Vo={class:"no-premium"},Wo={class:"no-premium__body"},Uo=Eo((()=>(0,t._)("div",{class:"no-registation__title"},"No access",-1))),Zo=Eo((()=>(0,t._)("div",{class:"no-registation__text"}," For watching some films you need to buy premium status ",-1))),zo={class:"no-registation__buttons"},Lo=Eo((()=>(0,t._)("button",{class:"no-premium__button"}," To films ",-1))),Ho=Eo((()=>(0,t._)("button",{class:"no-premium__button"},"Buy premium",-1)));function Jo(e,o){const r=(0,t.up)("router-link");return(0,t.wg)(),(0,t.iD)("div",Vo,[(0,t._)("div",Wo,[Uo,Zo,(0,t._)("div",zo,[(0,t.Wm)(r,{to:"/films"},{default:(0,t.w5)((()=>[Lo])),_:1}),(0,t.Wm)(r,{to:"/user/premium"},{default:(0,t.w5)((()=>[Ho])),_:1})])])])}const Go={},Yo=(0,l.Z)(Go,[["render",Jo],["__scopeId","data-v-4c7bdd1b"]]);var Ro=Yo,Ko=(0,d.p7)({history:(0,d.r5)(),routes:[{path:"/:pathMatch(.*)*",redirect:"/films"},{path:"/",name:"main",component:w},{path:"/films",name:"films",component:O},{path:"/films/:id",name:"film",component:de},{path:"/user-auth",name:"userAuthefication",component:He},{path:"/user",name:"user",component:uo},{path:"/user/premium",name:"premium",component:So},{path:"/no-premium",name:"premiumWarning",component:Ro},{path:"/no-registration",name:"registationWarning",component:Ao},{path:"/films",name:"filmsLayout",component:Q,children:[{path:"",name:"films",component:O},{path:":id",name:"film",component:de},{path:"/user-auth",name:"userAuthefication",component:He},{path:"/user",name:"user",component:uo},{path:"/user/premium",name:"premium",component:So}]}]});const Xo=(0,s.ri)(c);Xo.use(Ko),Xo.mount("#app")}},o={};function r(s){var t=o[s];if(void 0!==t)return t.exports;var a=o[s]={exports:{}};return e[s](a,a.exports,r),a.exports}r.m=e,function(){var e=[];r.O=function(o,s,t,a){if(!s){var i=1/0;for(c=0;c<e.length;c++){s=e[c][0],t=e[c][1],a=e[c][2];for(var n=!0,l=0;l<s.length;l++)(!1&a||i>=a)&&Object.keys(r.O).every((function(e){return r.O[e](s[l])}))?s.splice(l--,1):(n=!1,a<i&&(i=a));if(n){e.splice(c--,1);var m=t();void 0!==m&&(o=m)}}return o}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[s,t,a]}}(),function(){r.d=function(e,o){for(var s in o)r.o(o,s)&&!r.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:o[s]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)}}(),function(){var e={143:0};r.O.j=function(o){return 0===e[o]};var o=function(o,s){var t,a,i=s[0],n=s[1],l=s[2],m=0;if(i.some((function(o){return 0!==e[o]}))){for(t in n)r.o(n,t)&&(r.m[t]=n[t]);if(l)var c=l(r)}for(o&&o(s);m<i.length;m++)a=i[m],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(c)},s=self["webpackChunkvuerouter"]=self["webpackChunkvuerouter"]||[];s.forEach(o.bind(null,0)),s.push=o.bind(null,s.push.bind(s))}();var s=r.O(void 0,[998],(function(){return r(5051)}));s=r.O(s)})();
//# sourceMappingURL=app.5ffa8d44.js.map