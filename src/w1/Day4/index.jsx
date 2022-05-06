import React, { useState } from 'react'
import { Flex } from '../../shared/styled'
import { PostAuthor } from '../Day2'
import { CardStyled, StyledButton, StyledHeader, StyledTab } from './styled'
import img3 from '../../assets/Avatars/shutter.png'
import { Bookmark, Clipboard, Heart, MoreVertical } from 'react-feather'

const Day4 = () => {
  return (
    <div>
      <h1>Day 4a Cards</h1>

      <Flex justify='space-around'>
        <FoodCard />
        <FoodCard />
      </Flex>
      <br />
      <Flex justify='space-around'>
        <FoodCard />
        <FoodCard />
      </Flex>

      <h1>Day 4b Tabs</h1>

      <Tabs />
    </div>
  )
}

export default Day4

const FoodCard = () => {
  const [liked, setLiked] = useState(false)
  const [bookmarked, setBookmarked] = useState(false)
  return (
    <CardStyled>
      <Flex alignItems='center' justify='space-between'>
        <PostAuthor img={img3} name='Billy' time='12hr ago' />
        <MoreVertical />
      </Flex>

      <div className='card-body'>
        <img src='https://via.placeholder.com/384/215/' alt='food' />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget nisl id libero tincidunt egestas. Nulla
          euismod, nisl eget euismod consectetur, nisi nisl venenatis nisl, euismod egestas nisl nisl euismod, euismod
          consectetur nisl nisl euismod.
        </p>
      </div>

      <Flex justify='space-between'>
        <div>
          <Heart onClick={() => setLiked(!liked)} style={{ fill: liked ? 'red' : '', color: liked ? 'red' : '' }} />
          <Clipboard />
        </div>
        <Bookmark
          onClick={() => setBookmarked(!bookmarked)}
          style={{ fill: bookmarked ? 'purple' : '', color: bookmarked ? 'purple' : '' }}
        />
      </Flex>
    </CardStyled>
  )
}

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <StyledTab>
      <StyledHeader>
        {['<> Code', '# Design', '$ Marketing', '~ Wiki', '@ Wiki'].map((tab, index) => (
          <StyledButton active={index === activeTab} onClick={() => setActiveTab(index)} key={index}>
            {tab}
          </StyledButton>
        ))}
      </StyledHeader>

      <div className='body'>
        {['<> Code', '# Design', '$ Marketing', '~ Wiki', '@ Wiki'].map((tab, index) => (
          <div key={index}>
            {activeTab === index && (
              <div>
                <h2>{tab}</h2>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor tempore consequuntur accusamus
                  similique nesciunt suscipit ea, nisi illum debitis maxime.
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </StyledTab>
  )
}
