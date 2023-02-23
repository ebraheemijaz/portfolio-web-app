import { useAddress, useConnect, useContract, useContractWrite, useMetamask } from "@thirdweb-dev/react";
import { ethers } from "ethers";
import { React, createContext, useContext } from "react";


const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
    const { contract } = useContract('0xF2A2337296877830664742B60663498596ecA4Ff');
    const { mutateAsync: createCampaign } = useContractWrite(contract, 'createCampaign')

    const address = useAddress();
    const connect = useMetamask();

    const publishCampaign = async (form) => {
        try {
            const data = await createCampaign([
                address,
                // form.name,
                form.title,
                form.story,
                form.goal,
                new Date(form.enddate).getTime(),
                form.image,
            ])
            alert("Successfully created.");
        } catch (error) {
            alert(error.reason);
        }
    }

    const getCampaign = async () => {
        const campaigns = await contract.call('getCampaigns');

        let paresedData = campaigns.map((each, i) => ({
            owner: each.owner,
            title: each.title,
            story: each.description,
            goal: ethers.utils.formatEther(each.target.toString()),
            deadline: each.deadline.toNumber(),
            amountCollected: ethers.utils.formatEther(each.amountCollected.toString()),
            image: each.image,
            pId: i
        }));
        return paresedData;
    }

    const getMyCampaign = async () => {
        const allCampaigns = await getCampaign();
        return allCampaigns.filter(each => each.owner === address);
    }

    const donate = async (pId, amount) => {
        const data = await contract.call('donateToCampaign', pId, { value: ethers.utils.parseEther(amount) });
        return data;
    }

    const getDonations = async (pId) => {
        const donations = await contract.call('getDonators', pId);
        const numberOfDonations = donations[0].length;
        const parsedDonations = [];
        for (let i = 0; i < numberOfDonations; i++) {
            parsedDonations.push({
                donator: donations[0][i],
                donation: ethers.utils.formatEther(donations[1][i].toString())
            })
        }
        return parsedDonations;
    }

    return <StateContext.Provider value={{
        address, contract, createCampaign: publishCampaign, connect, getCampaign, getMyCampaign, donate, getDonations
    }}>
        {children}
    </StateContext.Provider>
}

export const useStateContext = () => useContext(StateContext)

