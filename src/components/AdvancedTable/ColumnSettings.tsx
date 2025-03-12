import React from 'react'
import type { Table } from '@tanstack/react-table'
import { Button } from '../Button'
import { IconSettings } from '../SVGIcons'
import {Switcher} from '../Switcher';

interface ColumnSettingsProps<T> {
  table: Table<T>
}

export function ColumnSettings<T>({ table }: ColumnSettingsProps<T>) {
    return (
    <div className="settings-menu">
      <Button
        type={'secondary'}
        iconProps={{
          Component: IconSettings
        }}
        onClick={() => {
          const menu = document.getElementById('columnMenu')
          menu?.classList.toggle('hidden')
        }}
      />
      <div
        id="columnMenu"
        className="settings-menu__dropdown scrollbar scrollbar--vertical"
      >
        {table.getAllLeafColumns().map((column) => (
          <div
            key={column.id}
            className={'settings-menu__dropdown__option'}
          >
              <Switcher
                  label={column.id}
                  selectedValue={column.getIsVisible()}
                  onChange={column.getToggleVisibilityHandler()}
                  disabled={!column.getCanHide()}
                  inlineType={true}
                  size={'small'}
              />
            {/*<label className="flexbox align-items--center flex-1 cursor-pointer">*/}
            {/*  <input*/}
            {/*    type="checkbox"*/}
            {/*    checked={column.getIsVisible()}*/}
            {/*    onChange={column.getToggleVisibilityHandler()}*/}
            {/*    className="mr-2"*/}
            {/*    disabled={!column.getCanHide()}*/}
            {/*  />*/}
            {/*  {column.id}*/}
            {/*</label>*/}
          </div>
        ))}
      </div>
    </div>
  )
}
