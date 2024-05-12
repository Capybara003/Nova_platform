import { Card } from 'design-systems/Atoms/Card'
import { UtilityPortalData, UtilityPortalData2, UtilityPortalData3 } from 'design-systems/data/data'

export const Utility = () => {
  return (
    <div className="flex flex-col gap-[22px]">
      <div className="grid !grid-cols-1 gap-[22px] text-center xsm:!grid-cols-2 md:!grid-cols-3">
        {UtilityPortalData.map(item => (
          <>
            <Card
              className="min-h-[275px]"
              icon={item.icon}
              label={item.label}
              statusIcon={item.statusIcon}
              subtitle={item.subtitle}
            />
          </>
        ))}
      </div>
      <div className="grid !grid-cols-1 gap-[22px] xsm:!grid-cols-2 md:!grid-cols-4">
        {UtilityPortalData2.map(item => (
          <>
            <Card
              className="min-h-[275px]"
              icon={item.icon}
              label={item.label}
              statusIcon={item.statusIcon}
              subtitle={item.subtitle}
            />
          </>
        ))}
      </div>
      <div className="grid !grid-cols-1 gap-[22px] xsm:!grid-cols-2 md:!grid-cols-5">
        {UtilityPortalData3.map(item => (
          <>
            <Card
              className="min-h-[275px]"
              icon={item.icon}
              label={item.label}
              statusIcon={item.statusIcon}
              subtitle={item.subtitle}
            />
          </>
        ))}
      </div>
    </div>
  )
}
