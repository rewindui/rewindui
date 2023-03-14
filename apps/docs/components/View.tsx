import * as React from 'react';

export const View = ({ prop, value = '', children }) => {
  return (
    <div className="flex flex-col border divide-y divide-slate-200 rounded-lg shadow-sm">
      <div className="flex space-x-2 items-center bg-slate-100/75 text-slate-800 p-2.5">
        {prop}
        {value && <Badge>{value}</Badge>}
      </div>
      <div className="bg-grid bg-stone-50 flex flex-wrap gap-x-2 gap-y-2 p-2.5">{children}</div>
    </div>
  );
};

export const EnhancedView = ({ prop, value = '', ...props }) => {
  const child = React.Children.only(props.children);
  const { children, ...rest } = child.props;

  return (
    <div className="flex flex-col border divide-y divide-slate-200 rounded-lg shadow-sm">
      <div className="flex space-x-2 items-center bg-slate-100/75 text-slate-800 p-2.5">
        {prop}
        {value && <Badge>{value}</Badge>}
      </div>
      <div className="flex flex-wrap">
        <div className="flex flex-col min-w-[250px] border divide-y divide-slate-200 rounded m-2.5 text-sm">
          <span className="font-medium p-1.5">Props</span>
          {Object.keys(rest).map((prop) => (
            <div key={prop} className="flex items-center space-x-0 p-1.5">
              <div className="text-slate-500">{prop}</div>
              {typeof rest[prop] === 'string' && (
                <div className="text-slate-800">
                  <Badge>{rest[prop]}</Badge>
                </div>
              )}
            </div>
          ))}
          {!Object.keys(rest).length && (
            <span className="text-slate-700 p-1.5">No properties selected</span>
          )}
        </div>
        <div className="bg-grid bg-stone-50 flex-1 p-2.5">{props.children}</div>
      </div>
    </div>
  );
};

export const Badge = ({ children }) => {
  return (
    <div className="flex items-center space-x-0">
      <span>=&quot;</span>
      <div className="rounded px-1 text-sm bg-yellow-100 text-yellow-700 border border-dashed border-red-200">
        {children}
      </div>
      <span>&quot;</span>
    </div>
  );
};

export const ViewGroup = ({ children }) => {
  return <div className="flex flex-col space-y-5">{children}</div>;
};
