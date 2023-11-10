import { Breadcrumbs, Calendar as RWCalendar, Text } from '@rewind-ui/core';
import { RocketLaunch } from '@icons/RocketLaunch.tsx';

export default function Calendar() {
  return (
    <div className="flex flex-col gap-8">
      <Breadcrumbs>
        <Breadcrumbs.Item href="/">
          <RocketLaunch />
        </Breadcrumbs.Item>
        <Breadcrumbs.Item>Dates</Breadcrumbs.Item>
        <Breadcrumbs.Item>Calendar</Breadcrumbs.Item>
      </Breadcrumbs>

      <div className="container">
        <Text variant="h4" color="gray">
          Size
        </Text>
        <hr />

        <div className="max-w-xs mx-auto mt-8">
          <RWCalendar size="xs" />
        </div>

        <div className="max-w-sm mx-auto mt-8">
          <RWCalendar size="sm" />
        </div>

        <div className="max-w-md mx-auto mt-8">
          <RWCalendar size="md" />
        </div>
      </div>
    </div>
  );
}
