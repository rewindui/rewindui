import { Button, Calendar, Input } from '@rewind-ui/core';
import * as React from 'react';
import { View, ViewGroup } from '@/ui/View';
import { addDays, format, isValid, Locale } from 'date-fns';
import { default as el } from 'date-fns/locale/el';
import { default as enGB } from 'date-fns/locale/en-GB';
import { default as de } from 'date-fns/locale/de';

export type CalendarShowcaseProps = {
  showcase:
    | 'sizes'
    | 'shadows'
    | 'radiuses'
    | 'bordered'
    | 'border-styles'
    | 'horizontal-borders'
    | 'vertical-borders'
    | 'min-date'
    | 'max-date'
    | 'disabled-dates'
    | 'disabled-weekends'
    | 'colored-dates'
    | 'controlled-state'
    | 'locales';
};

export const CalendarShowcase = (props: CalendarShowcaseProps) => {
  const { showcase } = props;

  const components = {
    sizes: <Sizes />,
    shadows: <Shadows />,
    radiuses: <Radiuses />,
    bordered: <Bordered />,
    'border-styles': <BorderStyles />,
    'horizontal-borders': <HorizontalBorders />,
    'vertical-borders': <VerticalBorders />,
    'min-date': <MinDate />,
    'max-date': <MaxDate />,
    'disabled-dates': <DisabledDates />,
    'disabled-weekends': <DisabledWeekends />,
    'colored-dates': <ColoredDates />,
    'controlled-state': <ControlledState />,
    locales: <Locales />,
  };

  return components[showcase] || <div>Error: Invalid showcase type</div>;
};

const Sizes = () => {
  return (
    <ViewGroup>
      <View>
        <div className="w-[16rem]">
          <Calendar value={new Date()} size="xs" />
        </div>
      </View>

      <View>
        <div className="w-[18rem]">
          <Calendar value={new Date()} size="sm" />
        </div>
      </View>

      <View>
        <div className="w-[20rem]">
          <Calendar value={new Date()} size="md" />
        </div>
      </View>

      <View>
        <div className="w-[22rem]">
          <Calendar value={new Date()} size="lg" />
        </div>
      </View>

      <View>
        <div className="w-[26rem]">
          <Calendar value={new Date()} size="xl" />
        </div>
      </View>
    </ViewGroup>
  );
};

const Radiuses = () => {
  return (
    <ViewGroup>
      <View>
        <div className="w-[20rem]">
          <Calendar value={new Date()} radius="none" />
        </div>
      </View>
      <View>
        <div className="w-[20rem]">
          <Calendar value={new Date()} radius="sm" />
        </div>
      </View>
      <View>
        <div className="w-[20rem]">
          <Calendar value={new Date()} radius="base" />
        </div>
      </View>
      <View>
        <div className="w-[20rem]">
          <Calendar value={new Date()} radius="md" />
        </div>
      </View>
      <View>
        <div className="w-[20rem]">
          <Calendar value={new Date()} radius="lg" />
        </div>
      </View>
    </ViewGroup>
  );
};

const Shadows = () => {
  return (
    <ViewGroup>
      <View>
        <div className="w-[20rem]">
          <Calendar value={new Date()} shadow="none" />
        </div>
      </View>
      <View>
        <div className="w-[20rem]">
          <Calendar value={new Date()} shadow="sm" />
        </div>
      </View>
      <View>
        <div className="w-[20rem]">
          <Calendar value={new Date()} shadow="base" />
        </div>
      </View>
      <View>
        <div className="w-[20rem]">
          <Calendar value={new Date()} shadow="md" />
        </div>
      </View>
      <View>
        <div className="w-[20rem]">
          <Calendar value={new Date()} shadow="lg" />
        </div>
      </View>
      <View>
        <div className="w-[20rem]">
          <Calendar value={new Date()} shadow="xl" />
        </div>
      </View>
    </ViewGroup>
  );
};

const Bordered = () => {
  return (
    <ViewGroup>
      <View>
        <div className="w-[20rem]">
          <Calendar value={new Date()} bordered={true} />
        </div>
      </View>
      <View>
        <div className="w-[20rem]">
          <Calendar value={new Date()} bordered={false} />
        </div>
      </View>
    </ViewGroup>
  );
};

const HorizontalBorders = () => {
  return (
    <ViewGroup>
      <View>
        <div className="w-[20rem]">
          <Calendar value={new Date()} horizontalBorders={true} />
        </div>
      </View>
      <View>
        <div className="w-[20rem]">
          <Calendar value={new Date()} horizontalBorders={false} />
        </div>
      </View>
    </ViewGroup>
  );
};

const VerticalBorders = () => {
  return (
    <ViewGroup>
      <View>
        <div className="w-[20rem]">
          <Calendar value={new Date()} verticalBorders={true} />
        </div>
      </View>
      <View>
        <div className="w-[20rem]">
          <Calendar value={new Date()} verticalBorders={false} />
        </div>
      </View>
    </ViewGroup>
  );
};

const BorderStyles = () => {
  return (
    <ViewGroup>
      <View>
        <div className="w-[20rem]">
          <Calendar value={new Date()} borderStyle="solid" />
        </div>
      </View>
      <View>
        <div className="w-[20rem]">
          <Calendar value={new Date()} borderStyle="dashed" />
        </div>
      </View>
    </ViewGroup>
  );
};

const MinDate = () => {
  return (
    <View>
      <div className="w-[20rem]">
        <Calendar value={new Date()} minDate={new Date()} />
      </div>
    </View>
  );
};

const MaxDate = () => {
  return (
    <View>
      <div className="w-[20rem]">
        <Calendar value={new Date()} maxDate={new Date()} />
      </div>
    </View>
  );
};

const DisabledDates = () => {
  return (
    <View>
      <div className="w-[20rem]">
        <Calendar value={new Date()} disabledDates={[new Date()]} />
      </div>
    </View>
  );
};

const DisabledWeekends = () => {
  return (
    <ViewGroup>
      <View>
        <div className="w-[20rem]">
          <Calendar value={new Date()} disabledWeekends={true} />
        </div>
      </View>
      <View>
        <div className="w-[20rem]">
          <Calendar value={new Date()} disabledWeekends={false} />
        </div>
      </View>
    </ViewGroup>
  );
};

const ColoredDates = () => {
  const dates = [new Date(), addDays(new Date(), 2)];

  return (
    <ViewGroup>
      <View>
        <div className="w-[20rem]">
          <Calendar value={new Date()} blueDates={dates} />
        </div>
      </View>
      <View>
        <div className="w-[20rem]">
          <Calendar value={new Date()} redDates={dates} />
        </div>
      </View>
      <View>
        <div className="w-[20rem]">
          <Calendar value={new Date()} greenDates={dates} />
        </div>
      </View>
      <View>
        <div className="w-[20rem]">
          <Calendar value={new Date()} yellowDates={dates} />
        </div>
      </View>
      <View>
        <div className="w-[20rem]">
          <Calendar value={new Date()} purpleDates={dates} />
        </div>
      </View>
    </ViewGroup>
  );
};

const ControlledState = () => {
  const [date, setDate] = React.useState<Date | null | undefined>(new Date());

  return (
    <View>
      <div className="w-[20rem] flex flex-col gap-4">
        {<div>Selected date: {date && isValid(date) && format(date, 'yyyy-MM-dd')}</div>}
        <Input
          type="date"
          onChange={(event) => {
            setDate(
              event.target.value && isValid(new Date(event.target.value))
                ? new Date(event.target.value)
                : null
            );
          }}
          value={date && isValid(date) ? format(date, 'yyyy-MM-dd') : undefined}
        />

        <Calendar
          value={date}
          onChange={(updatedDate) => {
            if (updatedDate) {
              setDate(updatedDate);
            }
          }}
        />
      </div>
    </View>
  );
};

const Locales = () => {
  const [locale, setLocale] = React.useState<Locale>(enGB);

  return (
    <View>
      <div className="w-[20rem] flex flex-col gap-5">
        <div className="flex justify-evenly">
          <Button onClick={() => setLocale(enGB)}>English</Button>
          <Button onClick={() => setLocale(de)}>German</Button>
          <Button onClick={() => setLocale(el)}>Greek</Button>
        </div>
        <Calendar locale={locale} value={new Date()} dayFormat="EEE" />
      </div>
    </View>
  );
};
