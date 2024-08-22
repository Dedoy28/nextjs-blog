import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
       <hr></hr>
        <p>Hi, I'm Laurence Andre' Malana. I love R&B music, my favorite food is adobo, and in my free time, I enjoy playing sports, mobile games, and watching movies.</p>
        <p>I chose IT because I'm passionate about technology and excited about solving complex problems with innovative solutions.
        </p>
        <p>After graduation, I see myself exploring a career in cybersecurity, where I can protect systems and data from emerging threats.
        </p>
        <p>I expect to gain a deeper understanding of cybersecurity principles and develop practical skills to defend against various cyber threats.
        </p>
        <p>I’d like to discuss topics such as ethical hacking, network security, and the latest trends in cyber threats and defense strategies.
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}