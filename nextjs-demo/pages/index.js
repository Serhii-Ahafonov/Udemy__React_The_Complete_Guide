import { Fragment } from 'react';
import Head from 'next/head';
import { MongoClient } from 'mongodb';

import MeetupList from '../components/meetups/MeetupList';

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>React Meetups</title>
        <meta
          name='description'

        />
      </Head>
      <MeetupList meetups={props.meetups}/>;
    </Fragment>
  );
}

// export async function getServerSideProps(context) {
//   // fetch data from API
//   console.log(context)
//   const res = context.res;
//   const req = context
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS
//     }
//   };
// }

export async function getStaticProps() {
  // fetch data from API

  const client = await MongoClient.connect(
    'mongodb+srv://serhii-ahafonov:BF1w6pY8dUkIcQVd@cluster0.tj170.mongodb.net/meetups?retryWrites=true&w=majority'
  );
  const db = client.db();

  const meetupsCollection = db.collection('meetups');

  const meetups = await meetupsCollection.find().toArray();

  await client.close();

  return {
    props: {
      meetups: meetups.map(meetup => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      }))
    },
    revalidate: 1
  };
}

export default HomePage;