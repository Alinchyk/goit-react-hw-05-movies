import { ListItem, List, Section } from './Cast.styled';
import blankImage from './blank_profile.png';

const IMG_URL = 'https://image.tmdb.org/t/p/w500';

export default function Cast({ cast }) {
  if (!cast) {
    return;
  }

  return (
    <Section>
      {cast.length > 0 ? (
        <List>
          {cast.map(({ id, profile_path, name, character }) => {
            const imageSRC = profile_path ? IMG_URL + profile_path : blankImage;
            return (
              <ListItem key={id}>
                <img src={imageSRC} alt={name} width={200} height={300} />
                <div>
                  <p>
                    <span>{name}</span>
                  </p>
                  {character ? (
                    <p>
                      <b>Character:</b>
                      <span> {character}</span>
                    </p>
                  ) : (
                    <p>
                      <b>Character:</b>
                      <span> Unknown</span>
                    </p>
                  )}
                </div>
              </ListItem>
            );
          })}
        </List>
      ) : (
        <p>There is no information about the cast of this film yet.</p>
      )}
    </Section>
  );
}
