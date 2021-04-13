import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel='icon' href='/static/favicon.ico' importance='low' />
    </Head>
    <div className='hero'>
      <h1 className='title'>Next.js redirect example</h1>
      <p className='description'>
        You can see ho do redirects with <code>next.config.js</code> , <code>client side</code> or <code>server side</code>
      </p>

      <div className='row'>
        <a href='/config' className='card'>
          <h3>next.config.js &rarr;</h3>
          <p>Redirects are only available on the Node.js environment and do not affect client-side routing.</p>
        </a>
        <a href='client' className='card'>
          <h3>Client side &rarr;</h3>
          <p>Using next.js router</p>
        </a>
        <a href='client2' className='card'>
          <h3>Client side (no flashing) &rarr;</h3>
          <p>Using next.js router</p>
        </a>
        <a href='server' className='card'>
          <h3>Server side &rarr;</h3>
          <p>Using <code>redirect</code> inside <code>getServerSideProps</code></p>
        </a>
      </div>
    </div>

    <style jsx>{`
      .hero {
        width: 100%;
        color: #333;
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        line-height: 1.15;
        font-size: 48px;
      }
      .title,
      .description {
        text-align: center;
      }
      .row {
        max-width: 880px;
        margin: 80px auto 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      }
      .card {
        padding: 18px 18px 24px;
        width: 220px;
        text-align: left;
        text-decoration: none;
        color: #434343;
        border: 1px solid #9b9b9b;
      }
      .card:hover {
        border-color: #067df7;
      }
      .card h3 {
        margin: 0;
        color: #067df7;
        font-size: 18px;
      }
      .card p {
        margin: 0;
        padding: 12px 0 0;
        font-size: 13px;
        color: #333;
      }
    `}</style>
  </div>
)

export default Home
