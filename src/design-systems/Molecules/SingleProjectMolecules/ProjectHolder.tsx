import { InfoIcon } from 'design-systems/Atoms/Icons'
import Typography from 'design-systems/Atoms/Typography'
import DonutWithTableChart from 'design-systems/Templates/SingleCollectionTradesTemplate/NftTabSection/AnalyticsTab/DonutWithTableChart'

export const ProjectHolder = () => {
  return (
    <div className="mt-[22px] grid !grid-cols-1 gap-[22px] lg:!grid-cols-2">
      <div className="flex flex-col gap-5 rounded-[24px] bg-[#1e1c26] p-[22px]">
        <div className="flex flex-row items-center gap-2">
          <Typography className="text-left font-medium text-[#DBDBDB] drop-shadow" size="subtitle">
            Buys / Sells
          </Typography>
          <InfoIcon />
        </div>
        <div>
          <DonutWithTableChart
            chartCenterContent={
              <>
                <p>Avg. Age</p>
                <p className="text-2xl text-white font-medium">379 Days</p>
              </>
            }
            className={'!p-0'}
            isBg={false}
          />
        </div>
      </div>
      <div className="flex flex-col gap-5 rounded-[24px] bg-[#1e1c26] p-[22px]">
        <div className="flex flex-row items-center gap-2">
          <Typography className="text-left font-medium text-[#DBDBDB] drop-shadow" size="subtitle">
            Buys / Sells
          </Typography>
          <InfoIcon />
        </div>
        <div>
          <DonutWithTableChart
            chartCenterContent={
              <>
                <p>Avg. Age</p>
                <p className="text-2xl text-white font-medium">379 Days</p>
              </>
            }
            className={'!p-0'}
            isBg={false}
          />
        </div>
      </div>
      <div className="flex flex-col gap-5 rounded-[24px] bg-[#1e1c26] p-[22px]">
        <div className="flex flex-row items-center gap-2">
          <Typography className="text-left font-medium text-[#DBDBDB] drop-shadow" size="subtitle">
            Median Holder Balance
          </Typography>
          <InfoIcon />
        </div>
        <div>
          <DonutWithTableChart
            chartCenterContent={
              <>
                <p>Avg. Age</p>
                <p className="text-2xl text-white font-medium">379 Days</p>
              </>
            }
            className={'!p-0'}
            isBg={false}
          />
        </div>
      </div>
      <div className="flex flex-col gap-5 rounded-[24px] bg-[#1e1c26] p-[22px]">
        <div className="flex flex-row items-center gap-2">
          <Typography className="text-left font-medium text-[#DBDBDB] drop-shadow" size="subtitle">
            Median Holder Balance
          </Typography>
          <InfoIcon />
        </div>
        <div>
          <DonutWithTableChart
            chartCenterContent={
              <>
                <p>Avg. Age</p>
                <p className="text-2xl text-white font-medium">379 Days</p>
              </>
            }
            className={'!p-0'}
            isBg={false}
          />
        </div>
      </div>
      <div className="flex flex-col gap-5 rounded-[24px] bg-[#1e1c26] p-[22px]">
        <div className="flex flex-row items-center gap-2">
          <Typography className="text-left font-medium text-[#DBDBDB] drop-shadow" size="subtitle">
            Project MC Distribution
          </Typography>
          <InfoIcon />
        </div>
        <div>
          <DonutWithTableChart
            chartCenterContent={
              <>
                <p>Avg. Age</p>
                <p className="text-2xl text-white font-medium">379 Days</p>
              </>
            }
            className={'!p-0'}
            isBg={false}
          />
        </div>
      </div>
    </div>
  )
}
