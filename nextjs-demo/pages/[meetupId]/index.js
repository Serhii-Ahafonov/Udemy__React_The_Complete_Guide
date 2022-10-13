import MeetupDetail from '../../components/meetups/MeetupDetail';
import { MongoClient, ObjectId } from 'mongodb';
import { Fragment } from 'react';
import Head from 'next/head';

function MeetupDetails(props) {
  return (
    <Fragment>
      <Head>
        <title>{props.meetupDetail.title}</title>
        <meta
          name="description"
          content={props.meetupDetail.description}
        />
      </Head>
      <MeetupDetail
        image={props.meetupDetail.image}
        title={props.meetupDetail.title}
        address={props.meetupDetail.address}
        description={props.meetupDetail.description}
      />
    </Fragment>
  );
}

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    'mongodb+srv://serhii-ahafonov:BF1w6pY8dUkIcQVd@cluster0.tj170.mongodb.net/meetups?retryWrites=true&w=majority'
  );
  const db = client.db();

  const meetupsCollection = db.collection('meetups');

  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

  await client.close();

  return {
    fallback: false,
    paths: meetups.map(meetup => ({
      params: {
        meetupId: meetup._id.toString()
      }
    })),
  }
}

export async function getStaticProps(context) {
  // fetch data from API
  const meetupId = context.params.meetupId;

  const client = await MongoClient.connect(
    'mongodb+srv://serhii-ahafonov:BF1w6pY8dUkIcQVd@cluster0.tj170.mongodb.net/meetups?retryWrites=true&w=majority'
  );
  const db = client.db();

  const meetupsCollection = db.collection('meetups');

  const selectedMeetup = await meetupsCollection.findOne({
    _id: ObjectId(meetupId),
  });

  await client.close();

  return {
    props: {
      meetupDetail: {
        title: selectedMeetup.title,
        description: selectedMeetup.description,
        address: selectedMeetup.address,
        image: selectedMeetup.image,
        id: selectedMeetup._id.toString(),
      }
    },
    revalidate: 1
  };
}

export default MeetupDetails