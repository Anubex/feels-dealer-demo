import { Button } from '@mui/material'

import { PageT } from './activate-sim-view'
import InfographicSection from './components/infographic-section'
import IntroBanner from './components/intro-banner'

interface IntroT extends PageT {}

export default function Intro({ onNext }: IntroT) {
  if (onNext) {
    return (
      <>
        <div className="bg-white">
          <IntroBanner />
          <InfographicSection />
          <div className="grid justify-items-center pb-[50px]">
            <Button
              type="button"
              className="my-[50px] flex h-[52px] w-[233px] max-w-[233px] items-center justify-center gap-[5px] rounded-[10px] bg-gradient-to-b from-[#28A745] to-[#227041] text-[20px] font-medium !text-white shadow-lg"
              onClick={() => onNext('first')}
            >
              เริ่มลงทะเบียน
              <img src="/assets/images/right-href.svg" alt="arrow-right-icon" />
            </Button>
          </div>
        </div>
      </>
    )
  }
}
