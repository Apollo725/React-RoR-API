import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'antd';
import './TagInput.css';

const Tag = ({ id, tag, onClick, highlighted }) => {
  const removeSelectedTag = () => {
    if (id === 'plus-tag') return null;
    onClick(id);
  };

  let className = 'tag-input-tag';

  if (highlighted) {
    className += ' tag-input-tag--highlighted';
  }

  const iconStyle = {
    marginLeft: '4px',
    fontSize: '8px',
    color: '#FF4C43',
  }

  return (
    <li className={className} onClick={removeSelectedTag}>
      {tag}
      <span>
        {id !== 'plus-tag' ? <Icon style={iconStyle}  type="close" /> : ''}
      </span>
    </li>
  );
};

export default class TagInput extends Component {
  static propTypes = {
    currentTags: PropTypes.array,
    onTagInputChanged: PropTypes.func.isRequired,
  };

  static defaultProps = {
    currentTags: [],
  };

  constructor(props) {
    super(props);

    this.state = {
      deleteLatest: false,
    };
  }

  processTag = (value) => {
    return value.trim().replace(/\s{2,}/g, ' ');
  }

  handleInputKeyDown = (evt) => {
    const { currentTags } = this.props;
    let { keyCode, target: { value } } = evt;

    if (currentTags.length && evt.keyCode === 8 && !value.length) {
      if (!this.state.deleteLatest) {
        this.setState({ deleteLatest: true });
        return;
      }

      this.setState({ deleteLatest: false });
      this.props.onTagInputChanged(
        currentTags.slice(0, currentTags.length - 1)
      );

      return;
    }

    this.setState({ deleteLatest: false });
    value = this.processTag(value);

    if ((keyCode === 13 || keyCode === 188) &&
        this.isValid(value) &&
        !currentTags.includes(value)) {
      evt.preventDefault();
      this.props.onTagInputChanged(currentTags.concat(value));
      evt.target.value = '';
    }
  };

  handleRemoveItem = selectedIndex => {
    // this.setState({ deleteLatest: false });

    // this.props.onTagInputChanged(
    //   this.props.currentTags.filter((value, index) => index !== selectedIndex)
    // );
    console.log('remove this tag')
  };

  render() {
    const { currentTags } = this.props;
    const { deleteLatest } = this.state;
    const tagsLen = currentTags.length;

    return (
      <div className='tag-input-container'>
        {/* <div className='tag-input__input-area'>
          <input
            className='standard-input tag-input-field'
            placeholder='Add a tag...'
            onChange={this.handleInputChange}
            onKeyDown={this.handleInputKeyDown}
          />
        </div> */}
        <ul className='tag-input-tag-container'>
          {tagsLen > 0 &&
            currentTags.map((item, i) => (
              <Tag
                key={i}
                id={i}
                tag={item}
                highlighted={deleteLatest && (i === (tagsLen - 1))}
                onClick={this.handleRemoveItem}
              />
            ))}
          <Tag
            tag="+"
            id="plus-tag"
          />
        </ul>
      </div>
    );
  }
}
