export { Pricing }

import './Pricing.css'
import React from 'react'

function Pricing() {
  return (
    <div id="pricing-container">
      <PricingIndividual />
      <PricingCompany />
    </div>
  )
}

function PricingIndividual() {
  return (
    <>
      <P c="box" id="pricing-individual">
        <P c="header">Individual</P>
        <P c="table">
          <P c="row">
            <P c="cell">Always</P>
          </P>
          <P c="row">
            <P c="cell">
              <P c="free">Free</P>
            </P>
          </P>
        </P>
      </P>
    </>
  )
}
function PricingCompany() {
  return (
    <>
      <P c="box" id="pricing-company">
        <P c="header">Company</P>
        <P c="table">
          <P c="row">
            <P c="cell">Prototyping</P>
            <P c="cell">Development</P>
            <P c="cell">Finished</P>
          </P>
          <P c="row">
            <P c="cell">
              <P c="free">Free</P>
            </P>
            <P c="cell">
              <P c="price-container">
                <P c="price">$49</P> / month
                <br />
                <P c="price-note">per paid dev</P>
              </P>
            </P>
            <P c="cell">
              <P c="free">Free</P>
            </P>
          </P>
        </P>
      </P>
    </>
  )
}

function P({ c, ...props }: { c: string } & Record<string, any>) {
  return <div className={`pricing-${c}`} {...props} />
}
