import React, { useEffect, useState } from 'react'
import { CampaignCard, CampaignsList } from '../components';
import { useStateContext } from '../context'

export default function Profile() {
  const { getMyCampaign, contract, address } = useStateContext();
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([]);


  const fetchCampaigns = async () => {
    setLoading(true)
    const _ = await getMyCampaign();
    setData(_)
    setLoading(false)
  }

  useEffect(() => {
    fetchCampaigns();
  }, [address, contract])
  console.log({ data })

  return (
    <>
      <CampaignsList
        title="My Campaigns"
        data={data}
        loading={loading}
      />
    </>
  )
}
