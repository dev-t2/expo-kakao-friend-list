import { FC, memo } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const StyledAvatar = styled.div(({ theme }) => ({
  width: '20px',
  height: '20px',
  borderRadius: '50%',
  overflow: 'hidden',
}));

const StyledImg = styled.img({
  maxWidth: '100%',
});

interface IAvatar {
  avatar?: string | null;
}

const Avatar: FC<IAvatar> = ({ avatar }) => {
  return (
    <StyledAvatar>
      {avatar ? (
        <StyledImg src={avatar} alt="avatar" />
      ) : (
        <FontAwesomeIcon icon={faUser} size="lg" />
      )}
    </StyledAvatar>
  );
};

export default memo(Avatar);
