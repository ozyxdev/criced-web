/* eslint-disable react/jsx-no-bind */
import React, { useState } from 'react'
import { Link, RichText } from 'prismic-reactjs'
import useForm from '../../utils/useForm'
import UserIcon from '../../components/shared/icons/UserIcon'
import AtIcon from '../../components/shared/icons/AtIcon'
import PhoneIcon from '../../components/shared/icons/PhoneIcon'
import PinIcon from '../../components/shared/icons/PinIcon'
import MailSendIcon from '../../components/shared/icons/MailSendIcon'
import {
  ContactFormStyles,
  ContactInfoStyles,
  ContactStyles,
} from '../../components/styles/ContactStyles'
import { HeaderStyles } from '../../components/shared/HeaderStyles'

const ContactSlice = ({ slice }) => {
  const { inputs, handleChange, resetForm } = useForm({
    email: '',
    message: '',
    telephone: '',
    name: '',
  })

  const [isPrivacyChecked, setIsPrivacyChecked] = useState(false)

  async function handleSubmit(e) {
    // TODO: send form to email
    console.dir(inputs)
    e.preventDefault()
    resetForm()
  }

  return (
    <>
      <HeaderStyles>
        <h2>{slice.primary.titleSection}</h2>
        <p>{slice.primary.descriptionSection}</p>
      </HeaderStyles>
      <ContactStyles>
        <ContactFormStyles method="POST" onSubmit={handleSubmit}>
          <fieldset>
            <label htmlFor="name">
              Nombre
              <div className="input-container">
                <UserIcon />

                <input
                  type="text"
                  name="name"
                  autoComplete="name"
                  placeholder="Juan Doe"
                  value={inputs.name}
                  onChange={handleChange}
                />
              </div>
            </label>
            <label htmlFor="email">
              Email
              <div className="input-container">
                <AtIcon />
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder="email@example.com"
                  value={inputs.email}
                  onChange={handleChange}
                />
              </div>
            </label>
            <label htmlFor="telephone">
              Teléfono
              <div className="input-container">
                <PhoneIcon />

                <input
                  type="tel"
                  name="telephone"
                  autoComplete="telephone"
                  placeholder="444 123 4567"
                  value={inputs.telephone}
                  onChange={handleChange}
                />
              </div>
            </label>
            <label htmlFor="message" className="message">
              Mensaje
              <textarea
                rows="5"
                id="message"
                name="message"
                autoComplete="message"
                placeholder="Your message"
                value={inputs.message}
                onChange={handleChange}
              />
            </label>
            <div className="cta">
              <button type="submit" disabled={!isPrivacyChecked}>
                <span>{slice.primary.cta}</span>
              </button>
            </div>
          </fieldset>
          <form>
            <div className="privacy">
              <label htmlFor="checkbox">
                <input
                  type="checkbox"
                  name="privacy"
                  id="privacy"
                  checked={isPrivacyChecked}
                  onChange={() => setIsPrivacyChecked(!isPrivacyChecked)}
                />
                <a
                  href={Link.url(slice.primary.privacyDoc)}
                  target="_blank"
                  rel="noreferrer"
                >
                  {slice.primary.privacyCopy}
                </a>
              </label>
            </div>
          </form>
        </ContactFormStyles>
        <span className="cta-line">
          o envia un email a <a>{slice.primary.email}</a>
        </span>
        <ContactInfoStyles>
          <div className="contact-info-head">
            <span className="title">
              {slice.primary.title ? (
                <RichText render={slice.primary.title} />
              ) : (
                <h2>Template slice, update me!</h2>
              )}
            </span>
            {slice.primary.description ? (
              <RichText render={slice.primary.description} />
            ) : (
              <p>start by editing this slice from inside Prismic builder!</p>
            )}
          </div>
          <div className="contact-info">
            <div className="contact-info-item">
              <MailSendIcon fill />
              {slice.primary.email}
            </div>
            <div className="contact-info-item">
              <PhoneIcon fill />
              {slice.primary.phone}
            </div>
            <div className="contact-info-item">
              <PinIcon fill />
              {slice.primary.address}
            </div>
          </div>
          <div className="social">
            {slice?.items?.map((item, i) => (
              <a href={Link.url(item.link)} key={item.socialIcon.alt}>
                <img src={item.socialIcon.url} alt={item.socialIcon.alt} />
              </a>
            ))}
          </div>
        </ContactInfoStyles>
      </ContactStyles>
    </>
  )
}

export default ContactSlice
