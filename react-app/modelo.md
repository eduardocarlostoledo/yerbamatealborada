<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Yerba Mate Alborada — Origen Misiones, Calidad Premium</title>
  <meta name="description" content="Yerba Mate Alborada, elaborada con palo de origen Misiones. Sabor auténtico, precio competitivo, calidad premium para consumidores, revendedores y distribuidores."/>
  <link rel="preconnect" href="https://fonts.googleapis.com"/>
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet"/>

  <style>
    :root {
      --verde-selva: #1a3a1e;
      --verde-mate: #2d5a32;
      --verde-claro: #4a8a52;
      --dorado: #c8921a;
      --dorado-claro: #e8b040;
      --tierra: #7a4e2d;
      --crema: #f5f0e8;
      --crema-oscura: #ede4d0;
      --blanco: #fdfaf4;
      --texto: #1a1a0e;
      --texto-suave: #4a4a35;
    }

    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    html { scroll-behavior: smooth; }

    body {
      font-family: 'DM Sans', sans-serif;
      background: var(--blanco);
      color: var(--texto);
      overflow-x: hidden;
    }

    /* ─── NAV ─────────────────────────────────────────────── */
    nav {
      position: fixed; top: 0; left: 0; right: 0; z-index: 100;
      display: flex; align-items: center; justify-content: space-between;
      padding: 1.2rem 5%;
      background: rgba(26, 58, 30, 0.95);
      backdrop-filter: blur(12px);
      border-bottom: 1px solid rgba(200, 146, 26, 0.2);
    }
    .nav-logo {
      display: flex; align-items: center; gap: .8rem;
      text-decoration: none;
    }
    .nav-logo img { height: 44px; border-radius: 4px; }
    .nav-logo span {
      font-family: 'Playfair Display', serif;
      font-size: 1.2rem; font-weight: 700;
      color: var(--dorado-claro);
      letter-spacing: .04em;
    }
    .nav-links { display: flex; gap: 2.5rem; list-style: none; }
    .nav-links a {
      color: var(--crema); font-size: .9rem; font-weight: 400;
      text-decoration: none; letter-spacing: .08em; text-transform: uppercase;
      transition: color .25s;
    }
    .nav-links a:hover { color: var(--dorado-claro); }
    .nav-cta {
      background: var(--dorado); color: var(--verde-selva);
      padding: .6rem 1.4rem; border-radius: 2px;
      font-weight: 500; text-decoration: none; font-size: .88rem;
      letter-spacing: .06em; text-transform: uppercase;
      transition: background .25s;
    }
    .nav-cta:hover { background: var(--dorado-claro); }
    .nav-hamburger { display: none; flex-direction: column; gap: 5px; cursor: pointer; }
    .nav-hamburger span { width: 24px; height: 2px; background: var(--crema); border-radius: 2px; }

    /* ─── HERO ────────────────────────────────────────────── */
    #hero {
      min-height: 100vh;
      background: var(--verde-selva);
      display: grid; grid-template-columns: 1fr 1fr;
      align-items: center;
      padding: 8rem 5% 4rem;
      position: relative;
      overflow: hidden;
    }
    #hero::before {
      content: '';
      position: absolute; inset: 0;
      background:
        radial-gradient(ellipse 70% 90% at 110% 50%, rgba(74,138,82,.18) 0%, transparent 60%),
        radial-gradient(ellipse 40% 60% at -10% 80%, rgba(200,146,26,.12) 0%, transparent 60%);
      pointer-events: none;
    }
    .hero-badge {
      display: inline-flex; align-items: center; gap: .5rem;
      background: rgba(200,146,26,.15);
      border: 1px solid rgba(200,146,26,.4);
      color: var(--dorado-claro);
      padding: .4rem 1rem; border-radius: 100px;
      font-size: .8rem; font-weight: 500; letter-spacing: .1em; text-transform: uppercase;
      margin-bottom: 1.6rem;
      animation: fadeUp .7s ease both;
    }
    .hero-badge::before { content: '🌿'; }
    .hero-title {
      font-family: 'Playfair Display', serif;
      font-size: clamp(2.8rem, 5vw, 5rem);
      font-weight: 900; line-height: 1.05;
      color: var(--crema);
      margin-bottom: 1.4rem;
      animation: fadeUp .7s .1s ease both;
    }
    .hero-title em {
      font-style: italic; color: var(--dorado-claro);
      display: block;
    }
    .hero-sub {
      font-size: 1.15rem; font-weight: 300; line-height: 1.7;
      color: rgba(245,240,232,.75);
      max-width: 520px;
      margin-bottom: 2.4rem;
      animation: fadeUp .7s .2s ease both;
    }
    .hero-actions {
      display: flex; gap: 1rem; flex-wrap: wrap;
      animation: fadeUp .7s .3s ease both;
    }
    .btn-primary {
      background: var(--dorado); color: var(--verde-selva);
      padding: .9rem 2.2rem; border-radius: 2px;
      font-weight: 700; text-decoration: none; font-size: 1rem;
      letter-spacing: .04em;
      transition: background .25s, transform .2s;
      display: inline-block;
    }
    .btn-primary:hover { background: var(--dorado-claro); transform: translateY(-2px); }
    .btn-ghost {
      border: 1px solid rgba(245,240,232,.35); color: var(--crema);
      padding: .9rem 2.2rem; border-radius: 2px;
      font-weight: 400; text-decoration: none; font-size: 1rem;
      transition: border-color .25s, color .25s;
      display: inline-block;
    }
    .btn-ghost:hover { border-color: var(--dorado-claro); color: var(--dorado-claro); }
    .hero-stats {
      display: flex; gap: 2.5rem; margin-top: 3.5rem;
      border-top: 1px solid rgba(245,240,232,.12);
      padding-top: 2rem;
      animation: fadeUp .7s .4s ease both;
    }
    .stat-item { display: flex; flex-direction: column; gap: .3rem; }
    .stat-num {
      font-family: 'Playfair Display', serif;
      font-size: 2rem; font-weight: 700; color: var(--dorado-claro);
    }
    .stat-label { font-size: .82rem; color: rgba(245,240,232,.55); letter-spacing: .06em; text-transform: uppercase; }

    .hero-image-wrap {
      position: relative;
      display: flex; align-items: center; justify-content: center;
      animation: fadeLeft .9s .2s ease both;
    }
    .hero-image-wrap::before {
      content: '';
      position: absolute;
      width: 420px; height: 420px;
      background: radial-gradient(circle, rgba(200,146,26,.18) 0%, transparent 70%);
      border-radius: 50%;
    }
    .hero-image-wrap img {
      position: relative; z-index: 1;
      max-width: 520px; width: 100%;
      filter: drop-shadow(0 30px 60px rgba(0,0,0,.5));
      animation: float 6s ease-in-out infinite;
    }
    .hero-leaf {
      position: absolute;
      width: 80px; opacity: .12;
      pointer-events: none;
    }
    .hero-leaf-1 { top: 15%; right: 8%; transform: rotate(25deg); }
    .hero-leaf-2 { bottom: 20%; left: 5%; transform: rotate(-40deg); width: 60px; }

    /* ─── TRUST BAR ───────────────────────────────────────── */
    .trust-bar {
      background: var(--crema-oscura);
      border-top: 2px solid var(--dorado);
      border-bottom: 2px solid var(--dorado);
      padding: 1.2rem 5%;
      display: flex; align-items: center; justify-content: center; gap: 3rem;
      flex-wrap: wrap;
    }
    .trust-item {
      display: flex; align-items: center; gap: .6rem;
      font-size: .88rem; font-weight: 500;
      color: var(--verde-selva); letter-spacing: .04em;
    }
    .trust-icon { font-size: 1.3rem; }

    /* ─── PROBLEM ─────────────────────────────────────────── */
    #problem {
      background: var(--blanco);
      padding: 7rem 5%;
    }
    .section-tag {
      font-size: .78rem; letter-spacing: .18em; text-transform: uppercase;
      color: var(--dorado); font-weight: 500;
      margin-bottom: .8rem; display: block;
    }
    .section-title {
      font-family: 'Playfair Display', serif;
      font-size: clamp(2rem, 3.5vw, 3rem);
      font-weight: 700; line-height: 1.2;
      color: var(--verde-selva);
      margin-bottom: 1.2rem;
    }
    .section-sub {
      font-size: 1.05rem; line-height: 1.7;
      color: var(--texto-suave); max-width: 580px;
    }
    .problem-grid {
      display: grid; grid-template-columns: 1fr 1fr;
      gap: 4rem; align-items: center;
      margin-top: 4rem;
    }
    .problem-cards { display: flex; flex-direction: column; gap: 1.2rem; }
    .problem-card {
      background: var(--crema);
      border-left: 3px solid var(--dorado);
      padding: 1.4rem 1.6rem;
      border-radius: 0 6px 6px 0;
      transition: transform .25s, box-shadow .25s;
    }
    .problem-card:hover { transform: translateX(6px); box-shadow: 4px 4px 20px rgba(0,0,0,.07); }
    .problem-card h4 {
      font-family: 'Libre Baskerville', serif;
      font-size: 1rem; font-weight: 700;
      color: var(--verde-selva); margin-bottom: .4rem;
    }
    .problem-card p { font-size: .92rem; line-height: 1.6; color: var(--texto-suave); }
    .problem-image {
      position: relative;
    }
    .problem-image img {
      width: 100%; border-radius: 4px;
      box-shadow: 0 20px 50px rgba(26,58,30,.2);
    }
    .problem-image-quote {
      position: absolute; bottom: -20px; left: -20px;
      background: var(--verde-selva);
      color: var(--crema);
      padding: 1.4rem 1.8rem;
      border-radius: 4px;
      max-width: 240px;
      font-family: 'Libre Baskerville', serif;
      font-style: italic;
      font-size: .92rem; line-height: 1.5;
      box-shadow: 0 10px 30px rgba(0,0,0,.2);
    }
    .problem-image-quote::after {
      content: attr(data-author);
      display: block; margin-top: .6rem;
      font-style: normal; font-family: 'DM Sans', sans-serif;
      font-size: .78rem; color: var(--dorado-claro);
      letter-spacing: .06em;
    }

    /* ─── SOLUTION ────────────────────────────────────────── */
    #solution {
      background: var(--verde-selva);
      padding: 7rem 5%;
      position: relative; overflow: hidden;
    }
    #solution::before {
      content: '';
      position: absolute; top: 0; right: 0;
      width: 50%; height: 100%;
      background: radial-gradient(ellipse at right center, rgba(74,138,82,.15) 0%, transparent 70%);
      pointer-events: none;
    }
    #solution .section-title { color: var(--crema); }
    #solution .section-sub { color: rgba(245,240,232,.65); }
    .solution-grid {
      display: grid; grid-template-columns: repeat(3, 1fr);
      gap: 1.5rem; margin-top: 4rem;
    }
    .solution-card {
      background: rgba(245,240,232,.06);
      border: 1px solid rgba(245,240,232,.12);
      border-radius: 6px;
      padding: 2rem 1.8rem;
      position: relative; overflow: hidden;
      transition: background .3s, transform .25s;
    }
    .solution-card:hover {
      background: rgba(245,240,232,.1);
      transform: translateY(-4px);
    }
    .solution-card::before {
      content: '';
      position: absolute; top: 0; left: 0; right: 0;
      height: 2px;
      background: linear-gradient(90deg, var(--dorado), transparent);
    }
    .solution-icon {
      font-size: 2.2rem; margin-bottom: 1rem; display: block;
    }
    .solution-card h3 {
      font-family: 'Playfair Display', serif;
      font-size: 1.25rem; font-weight: 700;
      color: var(--dorado-claro); margin-bottom: .7rem;
    }
    .solution-card p {
      font-size: .92rem; line-height: 1.65;
      color: rgba(245,240,232,.65);
    }
    .solution-product {
      margin-top: 5rem;
      display: grid; grid-template-columns: 1fr 1fr;
      gap: 4rem; align-items: center;
    }
    .solution-product img {
      width: 100%; border-radius: 6px;
      box-shadow: 0 25px 60px rgba(0,0,0,.4);
    }
    .solution-details h3 {
      font-family: 'Playfair Display', serif;
      font-size: 2rem; font-weight: 700;
      color: var(--crema); margin-bottom: 1.2rem;
    }
    .solution-details p {
      font-size: 1rem; line-height: 1.7;
      color: rgba(245,240,232,.65); margin-bottom: 2rem;
    }
    .feature-list { list-style: none; display: flex; flex-direction: column; gap: .8rem; }
    .feature-list li {
      display: flex; align-items: flex-start; gap: .8rem;
      font-size: .95rem; color: rgba(245,240,232,.8);
    }
    .feature-list li::before {
      content: '✦'; color: var(--dorado); font-size: .8rem; margin-top: .2rem; flex-shrink: 0;
    }

    /* ─── HOW TO PREPARE ──────────────────────────────────── */
    #prepare {
      background: var(--crema);
      padding: 7rem 5%;
    }
    .prepare-steps {
      display: grid; grid-template-columns: repeat(4, 1fr);
      gap: 2rem; margin-top: 4rem;
      position: relative;
    }
    .prepare-steps::before {
      content: '';
      position: absolute;
      top: 40px; left: calc(12.5% + 20px); right: calc(12.5% + 20px);
      height: 2px;
      background: linear-gradient(90deg, var(--dorado), var(--verde-claro), var(--dorado));
    }
    .step-card {
      background: var(--blanco);
      border-radius: 8px;
      padding: 2rem 1.4rem 1.8rem;
      text-align: center;
      box-shadow: 0 4px 20px rgba(0,0,0,.07);
      position: relative;
      transition: transform .25s, box-shadow .25s;
    }
    .step-card:hover { transform: translateY(-5px); box-shadow: 0 10px 35px rgba(0,0,0,.12); }
    .step-num {
      width: 56px; height: 56px;
      background: var(--verde-selva);
      color: var(--dorado-claro);
      border-radius: 50%;
      display: flex; align-items: center; justify-content: center;
      font-family: 'Playfair Display', serif;
      font-size: 1.3rem; font-weight: 700;
      margin: 0 auto 1.2rem;
      border: 3px solid var(--crema);
      box-shadow: 0 0 0 2px var(--verde-selva);
      position: relative; z-index: 1;
    }
    .step-card h4 {
      font-family: 'Libre Baskerville', serif;
      font-size: 1rem; font-weight: 700;
      color: var(--verde-selva); margin-bottom: .5rem;
    }
    .step-card p { font-size: .88rem; line-height: 1.6; color: var(--texto-suave); }
    .step-temp {
      display: inline-block; margin-top: .6rem;
      background: rgba(200,146,26,.12); color: var(--tierra);
      border-radius: 100px; padding: .2rem .7rem;
      font-size: .78rem; font-weight: 600; letter-spacing: .04em;
    }

    /* ─── BENEFITS ────────────────────────────────────────── */
    #benefits {
      background: var(--blanco); padding: 7rem 5%;
    }
    .benefits-grid {
      display: grid; grid-template-columns: repeat(4, 1fr);
      gap: 1.5rem; margin-top: 4rem;
    }
    .benefit-card {
      background: var(--crema);
      border-radius: 8px;
      padding: 2rem 1.6rem;
      text-align: center;
      border-bottom: 3px solid transparent;
      transition: border-color .3s, transform .25s;
    }
    .benefit-card:hover { border-color: var(--dorado); transform: translateY(-4px); }
    .benefit-icon { font-size: 2.5rem; margin-bottom: 1rem; display: block; }
    .benefit-card h3 {
      font-family: 'Libre Baskerville', serif;
      font-size: 1.05rem; font-weight: 700;
      color: var(--verde-selva); margin-bottom: .5rem;
    }
    .benefit-card p { font-size: .88rem; line-height: 1.6; color: var(--texto-suave); }

    /* ─── TESTIMONIALS ────────────────────────────────────── */
    #testimonials {
      background: var(--crema-oscura);
      padding: 7rem 5%;
      position: relative; overflow: hidden;
    }
    #testimonials::before {
      content: '"';
      position: absolute; top: -40px; left: 4%;
      font-family: 'Playfair Display', serif;
      font-size: 30rem; font-weight: 900;
      color: rgba(200,146,26,.05);
      line-height: 1;
      pointer-events: none;
    }
    .testimonials-grid {
      display: grid; grid-template-columns: repeat(3, 1fr);
      gap: 1.8rem; margin-top: 4rem;
    }
    .testimonial-card {
      background: var(--blanco);
      border-radius: 8px; padding: 2rem;
      box-shadow: 0 2px 16px rgba(0,0,0,.06);
      position: relative;
      transition: transform .25s, box-shadow .25s;
    }
    .testimonial-card:hover { transform: translateY(-4px); box-shadow: 0 8px 30px rgba(0,0,0,.1); }
    .stars {
      color: var(--dorado); font-size: 1.1rem;
      margin-bottom: 1rem; letter-spacing: .1em;
    }
    .testimonial-text {
      font-family: 'Libre Baskerville', serif;
      font-style: italic;
      font-size: .97rem; line-height: 1.7;
      color: var(--texto); margin-bottom: 1.4rem;
    }
    .testimonial-author {
      display: flex; align-items: center; gap: .8rem;
      border-top: 1px solid var(--crema-oscura); padding-top: 1rem;
    }
    .author-avatar {
      width: 44px; height: 44px;
      background: var(--verde-selva);
      border-radius: 50%;
      display: flex; align-items: center; justify-content: center;
      font-family: 'Playfair Display', serif;
      font-size: 1.2rem; font-weight: 700; color: var(--dorado-claro);
      flex-shrink: 0;
    }
    .author-name { font-size: .92rem; font-weight: 600; color: var(--verde-selva); }
    .author-role { font-size: .78rem; color: var(--texto-suave); }
    .testimonial-featured {
      grid-column: span 3;
      background: var(--verde-selva); color: var(--crema);
      border-radius: 8px; padding: 2.5rem 3rem;
      display: flex; gap: 3rem; align-items: center;
    }
    .testimonial-featured .testimonial-text { color: rgba(245,240,232,.85); font-size: 1.15rem; }
    .testimonial-featured .author-name { color: var(--dorado-claro); }
    .featured-label {
      flex-shrink: 0;
      display: flex; flex-direction: column; align-items: center; justify-content: center;
      background: rgba(200,146,26,.15);
      border: 1px solid rgba(200,146,26,.3);
      border-radius: 6px; padding: 1.5rem;
      min-width: 120px;
    }
    .featured-label .big-num {
      font-family: 'Playfair Display', serif;
      font-size: 3rem; font-weight: 900;
      color: var(--dorado-claro); line-height: 1;
    }
    .featured-label span { font-size: .78rem; color: rgba(245,240,232,.5); text-align: center; margin-top: .3rem; }

    /* ─── RESELLERS ───────────────────────────────────────── */
    #resellers {
      background: var(--blanco); padding: 7rem 5%;
    }
    .resellers-grid {
      display: grid; grid-template-columns: repeat(4, 1fr);
      gap: 1.5rem; margin-top: 4rem;
    }
    .reseller-card {
      border: 1px solid var(--crema-oscura);
      border-radius: 8px; padding: 2rem 1.6rem;
      position: relative; overflow: hidden;
      transition: border-color .3s, transform .25s;
    }
    .reseller-card:hover { border-color: var(--verde-claro); transform: translateY(-4px); }
    .reseller-card::after {
      content: '';
      position: absolute; top: 0; left: 0; right: 0;
      height: 3px;
      background: linear-gradient(90deg, var(--verde-mate), var(--verde-claro));
      transform: scaleX(0); transform-origin: left;
      transition: transform .3s;
    }
    .reseller-card:hover::after { transform: scaleX(1); }
    .reseller-icon { font-size: 2.2rem; margin-bottom: 1rem; display: block; }
    .reseller-card h3 {
      font-family: 'Playfair Display', serif;
      font-size: 1.2rem; font-weight: 700;
      color: var(--verde-selva); margin-bottom: .7rem;
    }
    .reseller-card ul { list-style: none; display: flex; flex-direction: column; gap: .5rem; }
    .reseller-card ul li {
      font-size: .88rem; color: var(--texto-suave); line-height: 1.5;
      display: flex; gap: .5rem; align-items: flex-start;
    }
    .reseller-card ul li::before { content: '→'; color: var(--verde-claro); flex-shrink: 0; }

    /* ─── FAQ ─────────────────────────────────────────────── */
    #faq {
      background: var(--crema); padding: 7rem 5%;
    }
    .faq-container { max-width: 760px; margin: 4rem auto 0; }
    .faq-item {
      border-bottom: 1px solid var(--crema-oscura);
    }
    .faq-question {
      width: 100%; background: none; border: none; cursor: pointer;
      display: flex; justify-content: space-between; align-items: center;
      padding: 1.4rem 0;
      font-family: 'Libre Baskerville', serif;
      font-size: 1.05rem; font-weight: 700;
      color: var(--verde-selva); text-align: left;
      transition: color .25s;
    }
    .faq-question:hover { color: var(--dorado); }
    .faq-question .icon {
      font-size: 1.5rem; font-weight: 300;
      transition: transform .3s;
      flex-shrink: 0; margin-left: 1rem;
    }
    .faq-item.open .faq-question .icon { transform: rotate(45deg); }
    .faq-answer {
      max-height: 0; overflow: hidden;
      transition: max-height .4s ease, padding .3s;
    }
    .faq-item.open .faq-answer { max-height: 300px; }
    .faq-answer p {
      font-size: .95rem; line-height: 1.7;
      color: var(--texto-suave); padding-bottom: 1.4rem;
    }

    /* ─── CTA ─────────────────────────────────────────────── */
    #cta {
      background: var(--verde-selva);
      padding: 7rem 5%;
      position: relative; overflow: hidden;
      text-align: center;
    }
    #cta::before {
      content: '';
      position: absolute; inset: 0;
      background:
        radial-gradient(ellipse 60% 80% at 20% 50%, rgba(200,146,26,.1) 0%, transparent 70%),
        radial-gradient(ellipse 60% 80% at 80% 50%, rgba(74,138,82,.15) 0%, transparent 70%);
      pointer-events: none;
    }
    .cta-tag {
      font-size: .78rem; letter-spacing: .18em; text-transform: uppercase;
      color: var(--dorado); font-weight: 500;
      margin-bottom: .8rem; display: block;
    }
    .cta-title {
      font-family: 'Playfair Display', serif;
      font-size: clamp(2rem, 4vw, 3.5rem);
      font-weight: 900; line-height: 1.1;
      color: var(--crema); margin-bottom: 1.4rem;
    }
    .cta-title em { font-style: italic; color: var(--dorado-claro); }
    .cta-sub {
      font-size: 1.1rem; line-height: 1.7;
      color: rgba(245,240,232,.65);
      max-width: 560px; margin: 0 auto 3rem;
    }
    .cta-actions { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; }
    .btn-whatsapp {
      background: #25d366; color: #fff;
      padding: 1rem 2.2rem; border-radius: 2px;
      font-weight: 700; text-decoration: none; font-size: 1rem;
      display: inline-flex; align-items: center; gap: .6rem;
      transition: background .25s, transform .2s;
    }
    .btn-whatsapp:hover { background: #1fba58; transform: translateY(-2px); }
    .cta-cards {
      display: grid; grid-template-columns: repeat(3, 1fr);
      gap: 1.5rem; max-width: 860px; margin: 4rem auto 0;
    }
    .cta-card {
      background: rgba(245,240,232,.07);
      border: 1px solid rgba(245,240,232,.13);
      border-radius: 6px; padding: 1.8rem;
      transition: background .3s;
    }
    .cta-card:hover { background: rgba(245,240,232,.12); }
    .cta-card-icon { font-size: 2rem; margin-bottom: .8rem; display: block; }
    .cta-card h4 {
      font-family: 'Playfair Display', serif;
      font-size: 1.1rem; color: var(--dorado-claro);
      margin-bottom: .5rem;
    }
    .cta-card p { font-size: .88rem; line-height: 1.6; color: rgba(245,240,232,.55); }

    /* ─── FOOTER ──────────────────────────────────────────── */
    footer {
      background: #0f2211;
      padding: 4rem 5% 2rem;
    }
    .footer-top {
      display: grid; grid-template-columns: 2fr 1fr 1fr 1fr;
      gap: 3rem; padding-bottom: 3rem;
      border-bottom: 1px solid rgba(245,240,232,.08);
    }
    .footer-brand img { height: 50px; border-radius: 4px; margin-bottom: 1rem; }
    .footer-brand p {
      font-size: .9rem; line-height: 1.7;
      color: rgba(245,240,232,.45); max-width: 300px; margin-bottom: 1.4rem;
    }
    .footer-socials { display: flex; gap: .8rem; flex-wrap: wrap; }
    .social-btn {
      width: 38px; height: 38px;
      border: 1px solid rgba(245,240,232,.15);
      border-radius: 4px;
      display: flex; align-items: center; justify-content: center;
      color: rgba(245,240,232,.5); text-decoration: none; font-size: 1rem;
      transition: border-color .25s, color .25s;
    }
    .social-btn:hover { border-color: var(--dorado); color: var(--dorado); }
    .footer-col h5 {
      font-family: 'DM Sans', sans-serif;
      font-size: .78rem; font-weight: 500;
      letter-spacing: .14em; text-transform: uppercase;
      color: var(--dorado-claro); margin-bottom: 1.2rem;
    }
    .footer-col ul { list-style: none; display: flex; flex-direction: column; gap: .7rem; }
    .footer-col ul li a {
      font-size: .88rem; color: rgba(245,240,232,.45); text-decoration: none;
      transition: color .25s;
    }
    .footer-col ul li a:hover { color: var(--crema); }
    .footer-col .contact-line {
      display: flex; align-items: flex-start; gap: .6rem;
      font-size: .88rem; color: rgba(245,240,232,.45);
      margin-bottom: .7rem;
    }
    .footer-bottom {
      padding-top: 1.5rem;
      display: flex; align-items: center; justify-content: space-between;
      flex-wrap: wrap; gap: 1rem;
    }
    .footer-bottom p { font-size: .8rem; color: rgba(245,240,232,.3); }
    .footer-legal { display: flex; gap: 1.5rem; }
    .footer-legal a { font-size: .8rem; color: rgba(245,240,232,.3); text-decoration: none; }
    .footer-legal a:hover { color: rgba(245,240,232,.6); }
    .footer-province {
      display: flex; align-items: center; gap: .5rem;
      font-size: .78rem; color: rgba(245,240,232,.25);
    }
    .footer-province::before { content: '📍'; font-size: .9rem; }

    /* ─── ANIMATIONS ──────────────────────────────────────── */
    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(28px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    @keyframes fadeLeft {
      from { opacity: 0; transform: translateX(40px); }
      to   { opacity: 1; transform: translateX(0); }
    }
    @keyframes float {
      0%, 100% { transform: translateY(0); }
      50%       { transform: translateY(-14px); }
    }

    .reveal {
      opacity: 0; transform: translateY(30px);
      transition: opacity .7s ease, transform .7s ease;
    }
    .reveal.visible { opacity: 1; transform: translateY(0); }

    /* ─── RESPONSIVE ──────────────────────────────────────── */
    @media (max-width: 1024px) {
      .solution-grid { grid-template-columns: repeat(2, 1fr); }
      .benefits-grid { grid-template-columns: repeat(2, 1fr); }
      .resellers-grid { grid-template-columns: repeat(2, 1fr); }
      .testimonials-grid { grid-template-columns: 1fr 1fr; }
      .testimonial-featured { grid-column: span 2; }
    }

    @media (max-width: 768px) {
      nav { padding: 1rem 5%; }
      .nav-links { display: none; }
      .nav-hamburger { display: flex; }
      #hero { grid-template-columns: 1fr; padding-top: 7rem; }
      .hero-image-wrap { display: none; }
      .problem-grid { grid-template-columns: 1fr; }
      .problem-image { display: none; }
      .solution-grid { grid-template-columns: 1fr; }
      .solution-product { grid-template-columns: 1fr; }
      .prepare-steps { grid-template-columns: repeat(2, 1fr); }
      .prepare-steps::before { display: none; }
      .benefits-grid { grid-template-columns: repeat(2, 1fr); }
      .resellers-grid { grid-template-columns: 1fr; }
      .testimonials-grid { grid-template-columns: 1fr; }
      .testimonial-featured { grid-column: span 1; flex-direction: column; }
      .cta-cards { grid-template-columns: 1fr; }
      .footer-top { grid-template-columns: 1fr; gap: 2rem; }
      .footer-bottom { flex-direction: column; align-items: flex-start; }
    }

    @media (max-width: 480px) {
      .prepare-steps { grid-template-columns: 1fr; }
      .benefits-grid { grid-template-columns: 1fr; }
    }
  </style>
</head>

<body>

<!-- ═══════════════ NAV ═══════════════ -->
<nav>
  <a href="#" class="nav-logo">
    <img src="https://yerbamatealborada.com/img/logo-alborada-corto.jpg" alt="Yerba Mate Alborada"/>
    <span>Alborada</span>
  </a>
  <ul class="nav-links">
    <li><a href="#solution">Producto</a></li>
    <li><a href="#benefits">Beneficios</a></li>
    <li><a href="#resellers">Revendedores</a></li>
    <li><a href="#faq">Preguntas</a></li>
    <li><a href="https://yerbamatealborada.com/post">Blog</a></li>
  </ul>
  <a href="https://wa.me/543765042085" class="nav-cta" target="_blank">Contactar</a>
  <div class="nav-hamburger" onclick="toggleMenu()">
    <span></span><span></span><span></span>
  </div>
</nav>


<!-- ═══════════════ 1. HERO ═══════════════ -->
<section id="hero">
  <div>
    <div class="hero-badge">Origen Misiones · Con Palo · 100% Natural</div>
    <h1 class="hero-title">
      El mate que te<br/>
      <em>despierta el alma</em>
    </h1>
    <p class="hero-sub">
      Yerba Mate Alborada: elaborada con palo de origen Misiones, sabor meticulosamente diseñado para el deleite del consumidor. Para quienes empiezan el día desde el amor, la unión y el compartir.
    </p>
    <div class="hero-actions">
      <a href="https://wa.me/543765042085?text=Hola%2C%20quiero%20pedir%20Yerba%20Mate%20Alborada" class="btn-primary" target="_blank">
        Pedir ahora por WhatsApp
      </a>
      <a href="#solution" class="btn-ghost">Conocer el producto</a>
    </div>
    <div class="hero-stats">
      <div class="stat-item">
        <span class="stat-num">100%</span>
        <span class="stat-label">Origen Misiones</span>
      </div>
      <div class="stat-item">
        <span class="stat-num">Con Palo</span>
        <span class="stat-label">Sabor auténtico</span>
      </div>
      <div class="stat-item">
        <span class="stat-num">★ 5/5</span>
        <span class="stat-label">Clientes satisfechos</span>
      </div>
    </div>
  </div>
  <div class="hero-image-wrap">
    <img src="https://yerbamatealborada.com/img/producto-principal.png" alt="Yerba Mate Alborada producto principal"/>
    <svg class="hero-leaf hero-leaf-1" viewBox="0 0 100 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 0 C80 40, 100 80, 50 200 C0 80, 20 40, 50 0Z" fill="#4a8a52"/>
    </svg>
    <svg class="hero-leaf hero-leaf-2" viewBox="0 0 100 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 0 C80 40, 100 80, 50 200 C0 80, 20 40, 50 0Z" fill="#c8921a"/>
    </svg>
  </div>
</section>

<!-- TRUST BAR -->
<div class="trust-bar">
  <div class="trust-item"><span class="trust-icon">🌿</span>Sin conservantes artificiales</div>
  <div class="trust-item"><span class="trust-icon">📦</span>Envíos a todo el país</div>
  <div class="trust-item"><span class="trust-icon">🏅</span>Calidad premium garantizada</div>
  <div class="trust-item"><span class="trust-icon">💬</span>Atención directa por WhatsApp</div>
  <div class="trust-item"><span class="trust-icon">🤝</span>Somos de Misiones</div>
</div>


<!-- ═══════════════ 2. PROBLEM ═══════════════ -->
<section id="problem">
  <div class="reveal">
    <span class="section-tag">¿Te identificás?</span>
    <h2 class="section-title">Cansado de yerbas sin<br/>sabor ni identidad</h2>
    <p class="section-sub">
      Millones de materos eligen por precio y terminan tomando una yerba industrializada, sin origen claro, sin el verdadero sabor de la selva. ¿Cuándo fue la última vez que tu mate realmente te sorprendió?
    </p>
  </div>
  <div class="problem-grid reveal">
    <div class="problem-cards">
      <div class="problem-card">
        <h4>Yerba sin identidad de origen</h4>
        <p>La mayoría de las marcas mezclan yerbas de diferentes provincias y pierden el perfil único que solo Misiones puede dar.</p>
      </div>
      <div class="problem-card">
        <h4>Demasiado polvillo, poco sabor</h4>
        <p>Yerbas con exceso de polvillo tapan la bombilla y dan un sabor amargo sin carácter. El palo justo cambia todo.</p>
      </div>
      <div class="problem-card">
        <h4>Precios altos sin justificación</h4>
        <p>Pagar premium por packaging llamativo no garantiza calidad. La selección de la hoja sí lo hace.</p>
      </div>
      <div class="problem-card">
        <h4>Sin opción para emprender</h4>
        <p>Encontrar una yerba de calidad con precios para revendedor, que realmente te deje margen, es difícil.</p>
      </div>
    </div>
    <div class="problem-image">
      <img src="https://yerbamatealborada.com/img/home-about-section.jpg" alt="Selva de Misiones"/>
      <div class="problem-image-quote" data-author="— Tradición misionera">
        "El mate no es solo una bebida. Es el ritual con el que comenzás el día."
      </div>
    </div>
  </div>
</section>


<!-- ═══════════════ 3. SOLUTION ═══════════════ -->
<section id="solution">
  <div class="reveal">
    <span class="section-tag" style="color:var(--dorado-claro)">La diferencia Alborada</span>
    <h2 class="section-title">Calidad y tradición<br/>en cada paquete</h2>
    <p class="section-sub">
      En Alborada nos dedicamos a ofrecer la mejor yerba mate de Misiones, elaborada con los más altos estándares de calidad. Ideales para consumo personal y para la venta al por mayor.
    </p>
  </div>

  <div class="solution-grid reveal">
    <div class="solution-card">
      <span class="solution-icon">🌿</span>
      <h3>Hojas seleccionadas</h3>
      <p>Seleccionamos cuidadosamente las hojas de yerba mate para asegurar un sabor y aroma inigualables en cada infusión.</p>
    </div>
    <div class="solution-card">
      <span class="solution-icon">🪵</span>
      <h3>Con palo ideal</h3>
      <p>El tamaño de palo justo y la cantidad de polvillo precisa generan un sabor meticulosamente diseñado para el deleite.</p>
    </div>
    <div class="solution-card">
      <span class="solution-icon">📍</span>
      <h3>100% Origen Misiones</h3>
      <p>Producida en el corazón yerbatero del país. Sin mezclas. Sin intermediarios innecesarios. Del monte a tu mate.</p>
    </div>
    <div class="solution-card">
      <span class="solution-icon">💰</span>
      <h3>Precio competitivo</h3>
      <p>Los mejores precios del mercado sin comprometer la calidad, para el consumidor final y para quien quiera revender.</p>
    </div>
    <div class="solution-card">
      <span class="solution-icon">📈</span>
      <h3>Tendencia en crecimiento</h3>
      <p>Producto con alta demanda nacional e internacional. El mate premium es una de las bebidas más buscadas hoy.</p>
    </div>
    <div class="solution-card">
      <span class="solution-icon">🤝</span>
      <h3>Soporte real</h3>
      <p>Atención directa con los productores. Exclusividad por zona para revendedores. Acompañamos tu negocio.</p>
    </div>
  </div>

  <div class="solution-product reveal">
    <img src="https://yerbamatealborada.com/img/producto-2-principal.png" alt="Producto Yerba Mate Alborada"/>
    <div class="solution-details">
      <h3>Yerba Mate Alborada<br/>Con Palo · Misiones</h3>
      <p>
        Alborada simboliza un nuevo amanecer. Para quienes deciden todos los días, con la sencillez de un mate, desde el amor, la amistad, la unión y el compartir, mostrarse agradecidos a la vida desde la primera luz del alba.
      </p>
      <ul class="feature-list">
        <li>Elaborada con palo, sabor equilibrado y consistente</li>
        <li>Polvillo justo: sin tapones, sin amargor excesivo</li>
        <li>Aroma auténtico de la selva misionera</li>
        <li>Disponible en diferentes presentaciones y volúmenes</li>
        <li>Precio al consumidor y precio especial para revendedores</li>
      </ul>
    </div>
  </div>
</section>


<!-- ═══════════════ CÓMO PREPARAR ═══════════════ -->
<section id="prepare">
  <div class="reveal" style="text-align:center">
    <span class="section-tag">Guía de preparación</span>
    <h2 class="section-title">Cómo preparar el mate perfecto</h2>
    <p class="section-sub" style="margin: 0 auto">
      Preparar un mate perfecto es todo un arte. Seguí estos pasos para disfrutar al máximo de tu yerba mate de Misiones.
    </p>
  </div>
  <div class="prepare-steps reveal">
    <div class="step-card">
      <div class="step-num">1</div>
      <h4>Cargá el mate</h4>
      <p>Llenás el mate hasta las ¾ partes con yerba mate Alborada.</p>
    </div>
    <div class="step-card">
      <div class="step-num">2</div>
      <h4>Humedecé la yerba</h4>
      <p>Inclinás el mate y agregás agua tibia en la parte vacía para despertar la yerba.</p>
      <span class="step-temp">~70°C</span>
    </div>
    <div class="step-card">
      <div class="step-num">3</div>
      <h4>Insertá la bombilla</h4>
      <p>Insertás la bombilla y vertés agua caliente cerca de ella.</p>
      <span class="step-temp">~80°C</span>
    </div>
    <div class="step-card">
      <div class="step-num">4</div>
      <h4>¡A disfrutar!</h4>
      <p>Disfrutás de un mate lleno de sabor, aroma y tradición misionera.</p>
    </div>
  </div>
</section>


<!-- ═══════════════ BENEFICIOS ═══════════════ -->
<section id="benefits">
  <div class="reveal" style="text-align:center">
    <span class="section-tag">Por qué tomar mate</span>
    <h2 class="section-title">Más que una bebida.<br/>Un estilo de vida.</h2>
    <p class="section-sub" style="margin: 0 auto">La yerba mate de Misiones no solo es deliciosa: también ofrece beneficios reales para tu salud y bienestar.</p>
  </div>
  <div class="benefits-grid reveal">
    <div class="benefit-card">
      <span class="benefit-icon">⚡</span>
      <h3>Energía natural</h3>
      <p>Gracias a su cafeína natural, el mate es una excelente fuente de energía sin los efectos negativos de otras bebidas estimulantes.</p>
    </div>
    <div class="benefit-card">
      <span class="benefit-icon">🛡️</span>
      <h3>Rico en antioxidantes</h3>
      <p>Ayuda a combatir el envejecimiento celular y fortalece el sistema inmunológico de forma natural.</p>
    </div>
    <div class="benefit-card">
      <span class="benefit-icon">🌿</span>
      <h3>Digestivo</h3>
      <p>Facilita la digestión y ayuda a mantener un sistema digestivo saludable con cada cebada.</p>
    </div>
    <div class="benefit-card">
      <span class="benefit-icon">❤️</span>
      <h3>Comunión social</h3>
      <p>El mate es más que una bebida: es un símbolo de unión y de compartir en la cultura argentina y latinoamericana.</p>
    </div>
  </div>
</section>


<!-- ═══════════════ REVENDEDORES ═══════════════ -->
<section id="resellers">
  <div class="reveal" style="text-align:center">
    <span class="section-tag">Oportunidad de negocio</span>
    <h2 class="section-title">Hacé crecer tu negocio<br/>con Alborada</h2>
    <p class="section-sub" style="margin: 0 auto">Buscamos socios estratégicos para expandir Yerba Mate Alborada en todo el país. Exclusividad por zona, comisiones atractivas y soporte real.</p>
  </div>
  <div class="resellers-grid reveal">
    <div class="reseller-card">
      <span class="reseller-icon">🗺️</span>
      <h3>Representantes</h3>
      <ul>
        <li>Exclusividad territorial por provincia o zona</li>
        <li>Comisiones atractivas sobre ventas</li>
        <li>Soporte completo de la marca</li>
        <li>Zonas disponibles en todo el país</li>
      </ul>
    </div>
    <div class="reseller-card">
      <span class="reseller-icon">🏭</span>
      <h3>Distribuidores</h3>
      <ul>
        <li>Capacidad de almacenamiento y red de clientes</li>
        <li>Compra por packs o pallets</li>
        <li>Máxima rentabilidad por volumen</li>
        <li>Ideal si ya tenés estructura logística</li>
      </ul>
    </div>
    <div class="reseller-card">
      <span class="reseller-icon">🏪</span>
      <h3>Mayoristas</h3>
      <ul>
        <li>Los mejores precios por volumen</li>
        <li>Stokeo flexible según tu capacidad</li>
        <li>Venta por packs o pallets</li>
        <li>Atendé a tus clientes con la mejor yerba</li>
      </ul>
    </div>
    <div class="reseller-card">
      <span class="reseller-icon">🚀</span>
      <h3>Revendedores</h3>
      <ul>
        <li>Emprendé con un producto de alta demanda</li>
        <li>Inversión inicial accesible por bultos</li>
        <li>Márgenes competitivos garantizados</li>
        <li>Calidad que se vende sola</li>
      </ul>
    </div>
  </div>
  <div style="text-align:center; margin-top:3rem" class="reveal">
    <a href="https://wa.me/543765042085?text=Hola%2C%20me%20interesa%20ser%20revendedor%20de%20Yerba%20Mate%20Alborada" class="btn-primary" target="_blank" style="font-size:1.05rem">
      Consultar disponibilidad de zona →
    </a>
  </div>
</section>


<!-- ═══════════════ 4. TESTIMONIALS ═══════════════ -->
<section id="testimonials">
  <div class="reveal" style="text-align:center">
    <span class="section-tag">Lo que dicen nuestros clientes</span>
    <h2 class="section-title">Historias reales,<br/>resultados reales</h2>
  </div>
  <div class="testimonials-grid reveal">
    <div class="testimonial-card">
      <div class="stars">★★★★★</div>
      <p class="testimonial-text">"Desde que empecé a tomar Alborada no volví a ninguna otra. El sabor es otro nivel, se nota que es yerba de verdad de Misiones."</p>
      <div class="testimonial-author">
        <div class="author-avatar">M</div>
        <div>
          <div class="author-name">Marcela R.</div>
          <div class="author-role">Consumidora, Corrientes</div>
        </div>
      </div>
    </div>
    <div class="testimonial-card">
      <div class="stars">★★★★★</div>
      <p class="testimonial-text">"Soy revendedor hace 4 meses y el producto se vende solo. Mis clientes me piden más cada semana. Los márgenes son excelentes."</p>
      <div class="testimonial-author">
        <div class="author-avatar">J</div>
        <div>
          <div class="author-name">José L.</div>
          <div class="author-role">Revendedor, Posadas</div>
        </div>
      </div>
    </div>
    <div class="testimonial-card">
      <div class="stars">★★★★★</div>
      <p class="testimonial-text">"La atención es directa y rápida. Sin intermediarios, con ellos podés negociar volumen y tener un precio que realmente conviene."</p>
      <div class="testimonial-author">
        <div class="author-avatar">C</div>
        <div>
          <div class="author-name">Carlos F.</div>
          <div class="author-role">Mayorista, Buenos Aires</div>
        </div>
      </div>
    </div>
    <div class="testimonial-featured">
      <div class="featured-label">
        <span class="big-num">4★</span>
        <span>meses<br/>creciendo</span>
      </div>
      <div>
        <div class="stars">★★★★★</div>
        <p class="testimonial-text">"Tenía un almacén en Misiones y buscaba una yerba local que me diferenciara. Con Alborada triplicamos las ventas de yerba en el primer trimestre. La gente ya viene a buscarla puntualmente."</p>
        <div class="testimonial-author">
          <div class="author-avatar">A</div>
          <div>
            <div class="author-name">Analía P.</div>
            <div class="author-role">Distribuidora, Oberá, Misiones</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


<!-- ═══════════════ 5. FAQs ═══════════════ -->
<section id="faq">
  <div class="reveal" style="text-align:center">
    <span class="section-tag">Preguntas frecuentes</span>
    <h2 class="section-title">Resolvemos tus dudas</h2>
    <p class="section-sub" style="margin: 0 auto">¿Esto es para mí? ¿Cómo funciona la compra? Todo lo que necesitás saber antes de empezar.</p>
  </div>
  <div class="faq-container reveal">
    <div class="faq-item">
      <button class="faq-question" onclick="toggleFaq(this)">
        ¿Cuál es el origen de la yerba mate Alborada?
        <span class="icon">+</span>
      </button>
      <div class="faq-answer">
        <p>Alborada es elaborada exclusivamente con palo de origen Misiones, Argentina. La materia prima proviene de los yerbatales de la provincia, reconocidos mundialmente por producir la yerba de mayor calidad.</p>
      </div>
    </div>
    <div class="faq-item">
      <button class="faq-question" onclick="toggleFaq(this)">
        ¿Cómo funciona la compra mayorista o para revendedores?
        <span class="icon">+</span>
      </button>
      <div class="faq-answer">
        <p>Contactanos por WhatsApp o email y coordinamos todo directamente. Tenemos precios escalonados por volumen: bultos para revendedores, packs para mayoristas y pallets para distribuidores. Sin intermediarios, sin complicaciones.</p>
      </div>
    </div>
    <div class="faq-item">
      <button class="faq-question" onclick="toggleFaq(this)">
        ¿Realizan envíos a todo el país?
        <span class="icon">+</span>
      </button>
      <div class="faq-answer">
        <p>Sí. Realizamos envíos a todo el territorio nacional. Para compras mayoristas coordinamos el transporte directamente. Para consultas sobre costos y tiempos de envío a tu zona, escribinos al WhatsApp.</p>
      </div>
    </div>
    <div class="faq-item">
      <button class="faq-question" onclick="toggleFaq(this)">
        ¿Qué diferencia a Alborada de otras yerbas mate?
        <span class="icon">+</span>
      </button>
      <div class="faq-answer">
        <p>Tres cosas fundamentales: origen certificado en Misiones, selección cuidadosa de hojas con el tamaño de palo ideal y la cantidad de polvillo justa, y precio competitivo que no sacrifica calidad. La combinación es única en el mercado.</p>
      </div>
    </div>
    <div class="faq-item">
      <button class="faq-question" onclick="toggleFaq(this)">
        ¿Hay exclusividad territorial para representantes?
        <span class="icon">+</span>
      </button>
      <div class="faq-answer">
        <p>Sí, ofrecemos exclusividad por provincia o zona para representantes oficiales. La disponibilidad depende de las zonas ya asignadas. Consultanos la disponibilidad de tu zona directamente para saber si podés ser el representante oficial.</p>
      </div>
    </div>
    <div class="faq-item">
      <button class="faq-question" onclick="toggleFaq(this)">
        ¿Qué cantidad mínima debo comprar para precio de revendedor?
        <span class="icon">+</span>
      </button>
      <div class="faq-answer">
        <p>Trabajamos con diferentes escalas: desde bultos pequeños para revendedores que recién empiezan, hasta packs y pallets para mayoristas y distribuidores. Contactanos y te asesoramos según tu capacidad de inversión y volumen esperado.</p>
      </div>
    </div>
    <div class="faq-item">
      <button class="faq-question" onclick="toggleFaq(this)">
        ¿Tienen presentaciones especiales o formatos?
        <span class="icon">+</span>
      </button>
      <div class="faq-answer">
        <p>Sí, contamos con diferentes presentaciones. Para conocer el catálogo completo con todos los formatos y precios actualizados, visitá nuestra sección de productos o consultanos directamente.</p>
      </div>
    </div>
  </div>
</section>


<!-- ═══════════════ 6. CTA ═══════════════ -->
<section id="cta">
  <div class="reveal">
    <span class="cta-tag">Empezá hoy</span>
    <h2 class="cta-title">
      Tu negocio o tu mate<br/>
      merecen lo <em>mejor de Misiones</em>
    </h2>
    <p class="cta-sub">
      Contactanos ahora mismo. Te asesoramos sin compromiso, respondemos al instante y te contamos todo lo que necesitás saber para empezar.
    </p>
    <div class="cta-actions">
      <a href="https://wa.me/543765042085?text=Hola%2C%20quiero%20información%20sobre%20Yerba%20Mate%20Alborada" class="btn-whatsapp" target="_blank">
        💬 Escribinos al WhatsApp
      </a>
      <a href="mailto:alboradayerbamate@gmail.com" class="btn-ghost" style="color:var(--crema);border-color:rgba(245,240,232,.3)">
        ✉️ Enviar un email
      </a>
    </div>
  </div>
  <div class="cta-cards reveal">
    <div class="cta-card">
      <span class="cta-card-icon">🛒</span>
      <h4>Consumidor final</h4>
      <p>Pedí tu paquete directamente, sin rodeos. Recibís en tu domicilio la mejor yerba de Misiones.</p>
    </div>
    <div class="cta-card">
      <span class="cta-card-icon">📦</span>
      <h4>Revendedor / Mayorista</h4>
      <p>Consultá precios por volumen, disponibilidad de stock y condiciones comerciales exclusivas.</p>
    </div>
    <div class="cta-card">
      <span class="cta-card-icon">🗺️</span>
      <h4>Distribuidor / Representante</h4>
      <p>Conocé la disponibilidad de tu zona y sé el representante oficial de Alborada en tu región.</p>
    </div>
  </div>
</section>


<!-- ═══════════════ 7. FOOTER ═══════════════ -->
<footer>
  <div class="footer-top">
    <div class="footer-brand">
      <img src="https://yerbamatealborada.com/img/logo-alborada-corto.jpg" alt="Yerba Mate Alborada"/>
      <p>Alborada simboliza un nuevo amanecer. Yerba mate elaborada con palo de origen Misiones, con sabor meticulosamente diseñado para el deleite del consumidor.</p>
      <div class="footer-socials">
        <a href="https://wa.me/543765042085" class="social-btn" target="_blank" title="WhatsApp">💬</a>
        <a href="mailto:alboradayerbamate@gmail.com" class="social-btn" title="Email">✉️</a>
        <a href="https://www.google.com/maps/d/u/0/viewer?mid=1i6_KbhPl3Wwqpjs2EjCRjBzHdAgMzaE" class="social-btn" target="_blank" title="Ubicación">📍</a>
      </div>
    </div>
    <div class="footer-col">
      <h5>Producto</h5>
      <ul>
        <li><a href="https://yerbamatealborada.com/products">Ver productos</a></li>
        <li><a href="#benefits">Beneficios</a></li>
        <li><a href="#prepare">Cómo preparar</a></li>
        <li><a href="https://yerbamatealborada.com/values">Nuestra historia</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h5>Negocio</h5>
      <ul>
        <li><a href="#resellers">Revendedores</a></li>
        <li><a href="#resellers">Distribuidores</a></li>
        <li><a href="#resellers">Representantes</a></li>
        <li><a href="#resellers">Mayoristas</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h5>Contacto</h5>
      <div class="contact-line">💬 <a href="https://wa.me/543765042085" style="color:inherit;text-decoration:none">+54 376 504-2085</a></div>
      <div class="contact-line">✉️ <a href="mailto:alboradayerbamate@gmail.com" style="color:inherit;text-decoration:none">alboradayerbamate@gmail.com</a></div>
      <div class="contact-line">✉️ <a href="mailto:ventas@yerbamatealborada.com" style="color:inherit;text-decoration:none">ventas@yerbamatealborada.com</a></div>
      <div style="margin-top:1rem">
        <ul style="list-style:none">
          <li style="margin-bottom:.5rem"><a href="https://yerbamatealborada.com/post" style="color:rgba(245,240,232,.45);text-decoration:none;font-size:.88rem">Blog</a></li>
          <li><a href="https://yerbamatealborada.com/contact" style="color:rgba(245,240,232,.45);text-decoration:none;font-size:.88rem">Agendar reunión</a></li>
        </ul>
      </div>
    </div>
  </div>
  <div class="footer-bottom">
    <p>© 2025 Yerba Mate Alborada. Todos los derechos reservados.</p>
    <div class="footer-province">Producida en Misiones, Argentina</div>
    <div class="footer-legal">
      <a href="#">Política de privacidad</a>
      <a href="#">Términos y condiciones</a>
    </div>
  </div>
</footer>


<script>
  // Reveal on scroll
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  reveals.forEach(el => observer.observe(el));

  // FAQ toggle
  function toggleFaq(btn) {
    const item = btn.closest('.faq-item');
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  }

  // Mobile menu
  function toggleMenu() {
    const links = document.querySelector('.nav-links');
    if (links.style.display === 'flex') {
      links.style.display = 'none';
    } else {
      links.style.cssText = 'display:flex; flex-direction:column; position:absolute; top:70px; left:0; right:0; background:rgba(26,58,30,.98); padding:1.5rem 5%; gap:1rem; border-top:1px solid rgba(200,146,26,.2);';
    }
  }

  // Smooth nav links close on mobile click
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.addEventListener('click', () => {
      const links = document.querySelector('.nav-links');
      links.style.display = 'none';
    });
  });
</script>

</body>
</html>