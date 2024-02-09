/* eslint-disable @typescript-eslint/no-unused-vars */
import { ICreateOrderResult } from '@/services/order-service'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

import { packages } from './config-package'
import Intro from './intro'
import Result from './result'
import Summary from './summary'

type StepT = 'intro' | 'summary' | 'result'

export interface PageT {
  onNext?: Dispatch<SetStateAction<StepT>>
}

export default function PackageView() {
  const [searchParams] = useSearchParams()
  const id = searchParams.get('id')
  const [step, setStep] = useState<StepT>('intro')
  const [price, setPrice] = useState(0)
  const [vat, setVat] = useState(0)
  const [refCode, setRefCode] = useState('')
  const [result, setResult] = useState<ICreateOrderResult | undefined>(
    undefined,
  )

  useEffect(() => {
    if (id) {
      const selectedItem = packages.find((item) => item.id === +id)
      if (selectedItem) {
        setPrice(selectedItem.price)
        setVat(selectedItem.vat)
        setRefCode(selectedItem.refCode)
        setStep('summary')
      }
    }
  }, [id])

  const renderStepContent = () => {
    switch (step) {
      case 'intro':
        return (
          <Intro
            onNext={setStep}
            setPrice={setPrice}
            setVat={setVat}
            setRefCode={setRefCode}
          />
        )
      case 'summary':
        return (
          <Summary
            onNext={setStep}
            price={price}
            vat={vat}
            refCode={refCode}
            setResult={setResult}
          />
        )
      case 'result':
        return <Result price={price} vat={vat} result={result} />
      default:
        return (
          <Intro
            onNext={setStep}
            setPrice={setPrice}
            setVat={setVat}
            setRefCode={setRefCode}
          />
        )
    }
  }

  return <>{renderStepContent()}</>
}
