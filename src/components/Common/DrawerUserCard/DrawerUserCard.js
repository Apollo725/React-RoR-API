import React from 'react';
import { getShortenName } from '../../../utils/utils';
import './DrawerUserCard.css';
import TagInput from '../TagInput';
import Button from '../Button';
// import { Button } from 'antd';

const DrawerUserCard = (props) => {
  const { name, tags } = props;
  return (
    <div className="drawer-card">
      <div className="drawer-card__avatar mt-8">
        <span>{getShortenName(name)}</span>
      </div>
      <span className="drawer-card__name mt-8">{name}</span>
      <TagInput currentTags={tags} onTagInputChanged={() => {}} />
      <div className="drawer-card__btns">
        <Button color="primary">Invite</Button>
        <Button color="default">Cancel</Button>
        <Button color="danger">Delete</Button>
      </div>
    </div>
  )
}

export default DrawerUserCard;
