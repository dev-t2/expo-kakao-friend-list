import { FC, memo } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

interface IStyledAvatar {
  isLarge?: boolean;
}

const StyledAvatar = styled.div<IStyledAvatar>({
  width: 30,
  height: 30,
  borderRadius: '50%',
  overflow: 'hidden',
});

const StyledImg = styled.img({
  maxWidth: '100%',
});

interface IAvatar {
  avatar?: string | null;
  isLarge?: boolean;
}

const Avatar: FC<IAvatar> = ({ avatar, isLarge }) => {
  return (
    <StyledAvatar isLarge={isLarge}>
      {avatar ? (
        <StyledImg src={avatar} alt="avatar" />
      ) : (
        <FontAwesomeIcon icon={faUser} size="lg" />
      )}
    </StyledAvatar>
  );
};

export default memo(Avatar);
