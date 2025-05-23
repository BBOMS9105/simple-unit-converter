'use client'

import { useConverterStore, useCategoriesStore } from '@/store'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import { CategoryType } from '@/types'

export function CategorySelector() {
  const { categories } = useCategoriesStore()
  const { selectedCategory, setSelectedCategory } = useConverterStore()

  const handleCategorySelect = (categoryId: CategoryType) => {
    setSelectedCategory(categoryId)
  }

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLDivElement>,
    categoryId: CategoryType
  ) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      handleCategorySelect(categoryId)
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-foreground">
          변환 카테고리 선택
        </h2>
        {selectedCategory && (
          <Badge variant="secondary" className="text-sm">
            {categories.find(cat => cat.id === selectedCategory)?.name}
          </Badge>
        )}
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
        {categories.map((category) => (
          <Card
            key={category.id}
            className={cn(
              "cursor-pointer transition-all duration-200 hover:shadow-md",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
              selectedCategory === category.id
                ? "border-primary bg-primary/5 shadow-sm"
                : "border-border hover:border-primary/50"
            )}
            tabIndex={0}
            role="button"
            aria-pressed={selectedCategory === category.id}
            aria-label={`${category.name} 카테고리 선택`}
            onClick={() => handleCategorySelect(category.id as CategoryType)}
            onKeyDown={(event: React.KeyboardEvent<HTMLDivElement>) => handleKeyDown(event, category.id as CategoryType)}
          >
            <CardContent className="p-4 text-center">
              <div className="space-y-2">
                <div className="text-2xl" role="img" aria-label={category.name}>
                  {category.icon}
                </div>
                <div className="space-y-1">
                  <h3 className="font-medium text-sm leading-tight">
                    {category.name}
                  </h3>
                  <p className="text-xs text-muted-foreground line-clamp-2">
                    {category.description}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      {!selectedCategory && (
        <div className="text-center text-muted-foreground text-sm py-4">
          변환하려는 단위의 카테고리를 선택해주세요
        </div>
      )}
    </div>
  )
} 