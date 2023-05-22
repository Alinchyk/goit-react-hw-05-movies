// import { Section, ReviewsList } from './Reviews.styled';
// import Loader from 'components/Loader/Loader';

// export default function Reviews({ reviews }) {
//   if (!reviews) {
//     return;
//   }

//   return (
//     <Section>
//       {reviews ? (
//         <>
//           {reviews.length === 0 ? (
//             <p>There are no reviews yet.</p>
//           ) : (
//             <ReviewsList>
//               {reviews.map(({ author, content, id }) => (
//                 <li key={id}>
//                   <h3>Author: {author}</h3>
//                   <p>{content}</p>
//                 </li>
//               ))}
//             </ReviewsList>
//           )}
//         </>
//       ) : (
//         <Loader />
//       )}
//     </Section>
//   );
// }
