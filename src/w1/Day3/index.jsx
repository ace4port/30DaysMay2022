import { Day3Styled, TestimonialStyled, StyledIndicator, StyledTeam } from './styled'
import { Flex } from '../../shared/styled'
import { test, team } from './testimonials'
import { useState } from 'react'
import { ArrowLeft, ArrowRight } from 'react-feather'

const Day3 = () => {
  const arr = [...test]
  const [current, setCurrent] = useState(0)

  const slide = arr[current]

  return (
    <Day3Styled>
      <h2>Day 3 a</h2>

      <Testimonial content={slide.content} author={slide.author} img={slide.img} date={slide.date} />

      <div className='section'>
        <ArrowLeft onClick={() => setCurrent(current - 1 < 0 ? test.length - 1 : current - 1)} />
        <div>
          {test.map((_, i) => (
            <StyledIndicator
              key={i}
              active={i === current}
              className='indicator'
              onClick={() => setCurrent(i)}></StyledIndicator>
          ))}
        </div>

        <ArrowRight onClick={() => setCurrent((current + 1) % test.length)} />
      </div>

      <h2>Day 3b Our Team</h2>

      <div>
        <h1>Our Team</h1>
        <h3>Our Team only consists of the Best Talents</h3>

        <Flex>
          {team.map((member, i) => (
            <Team member={member} key={i} />
          ))}
        </Flex>
      </div>
    </Day3Styled>
  )
}

export default Day3

const Testimonial = ({ author, img, content, date }) => {
  return (
    <TestimonialStyled>
      <Flex>
        <div className='imgWrap'>
          <img src={img} alt={author} />
        </div>

        <div className='side'>
          <h4>{author}</h4>
          <p>{content}</p>

          <span>{date}</span>
        </div>
      </Flex>
    </TestimonialStyled>
  )
}

const Team = ({ member }) => {
  return (
    <StyledTeam>
      <div className='imgWrap'>
        <img src={member.img} alt={member.name} />
      </div>
      <h4>{member.name}</h4>
      <p>{member.desc}</p>
    </StyledTeam>
  )
}
