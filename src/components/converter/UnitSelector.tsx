'use client'

import { useConverterStore, useCategoriesStore } from '@/store'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { RefreshCw } from 'lucide-react'
import { Unit } from '@/types'
import { useLanguage } from '@/contexts/LanguageContext'
import { getUnitName } from '@/lib/i18n'

export function UnitSelector() {
  const { selectedCategory, fromUnit, toUnit, setFromUnit, setToUnit, swapUnits } = useConverterStore()
  const { getUnitsByCategory } = useCategoriesStore()
  const { t } = useLanguage()

  // 선택된 카테고리의 단위들 가져오기
  const availableUnits = selectedCategory ? getUnitsByCategory(selectedCategory) : []

  const handleFromUnitChange = (unitId: string) => {
    const unit = availableUnits.find(u => u.id === unitId)
    if (unit) {
      setFromUnit(unit)
    }
  }

  const handleToUnitChange = (unitId: string) => {
    const unit = availableUnits.find(u => u.id === unitId)
    if (unit) {
      setToUnit(unit)
    }
  }

  const handleSwapUnits = () => {
    if (fromUnit && toUnit) {
      swapUnits()
    }
  }

  // 카테고리가 선택되지 않은 경우 메시지 표시
  if (!selectedCategory) {
    return (
      <Card>
        <CardContent className="p-6 text-center">
          <p className="text-muted-foreground">
            {t.converter.selectCategoryFirst}
          </p>
        </CardContent>
      </Card>
    )
  }

  // 단위가 없는 경우 메시지 표시
  if (availableUnits.length === 0) {
    return (
      <Card>
        <CardContent className="p-6 text-center">
          <p className="text-muted-foreground">
            {t.converter.noUnitsAvailable}
          </p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">{t.converter.selectUnits}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* 변환할 단위 (From) */}
          <div className="space-y-2">
            <label htmlFor="from-unit" className="text-sm font-medium text-foreground">
              {t.converter.from}
            </label>
            <Select
              value={fromUnit?.id || ''}
              onValueChange={handleFromUnitChange}
              name="from-unit"
            >
              <SelectTrigger 
                id="from-unit"
                className="w-full"
                aria-label={t.converter.selectFromUnit}
              >
                <SelectValue placeholder={t.converter.selectUnit} />
              </SelectTrigger>
              <SelectContent>
                {availableUnits.map((unit: Unit) => (
                  <SelectItem key={unit.id} value={unit.id}>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{unit.symbol}</span>
                      <span className="text-muted-foreground">({getUnitName(unit.id, t)})</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* 결과 단위 (To) */}
          <div className="space-y-2">
            <label htmlFor="to-unit" className="text-sm font-medium text-foreground">
              {t.converter.to}
            </label>
            <Select
              value={toUnit?.id || ''}
              onValueChange={handleToUnitChange}
              name="to-unit"
            >
              <SelectTrigger 
                id="to-unit"
                className="w-full"
                aria-label={t.converter.selectToUnit}
              >
                <SelectValue placeholder={t.converter.selectUnit} />
              </SelectTrigger>
              <SelectContent>
                {availableUnits.map((unit: Unit) => (
                  <SelectItem key={unit.id} value={unit.id}>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{unit.symbol}</span>
                      <span className="text-muted-foreground">({getUnitName(unit.id, t)})</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* 단위 교환 버튼 */}
        {fromUnit && toUnit && (
          <div className="flex justify-center pt-2">
            <Button
              variant="outline"
              size="sm"
              onClick={handleSwapUnits}
              className="gap-2"
              aria-label={t.converter.swap}
            >
              <RefreshCw className="h-4 w-4" />
              {t.converter.swap}
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
} 