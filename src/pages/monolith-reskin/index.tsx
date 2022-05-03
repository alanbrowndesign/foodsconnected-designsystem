import { PageWrapper } from '@/components';
import tw from 'twin.macro';
import { Header, PillNav, Tile, SelectMenu } from '@/components';
import { styled, globalCss, theme } from '@/styles/stitches.config';
import { Text, Button, Container } from 'connected-ui-edge';

const globalPageStyles = globalCss({
  body: {
    background: '$neutral200',
  },
});

export default function HomePage() {
  globalPageStyles();
  const selectData = (items: Array<string> = ['All']) => {
    return (
      <>
        {items.map((item, i) => {
          return <option value={item}>{item}</option>;
        })}
        <option value={'two'}>{'two'}</option>
        <option value={'three'}>{'three'}</option>
      </>
    );
  };

  const selectItems = [
    {
      label: 'Site',
      children: selectData(['Tesco PLC (GR...']),
    },
    {
      label: 'Supplier type',
      children: selectData(['Fresh produce']),
    },
    {
      label: 'Status',
      children: selectData(),
    },
    {
      label: 'Country',
      children: selectData(),
    },
    {
      label: 'Sub category',
      children: selectData(),
    },
    {
      label: 'Supplied via',
      children: selectData(['Terra Natura Int...']),
    },
    {
      label: 'Lead technical',
      children: selectData(),
    },
    {
      label: 'Business activity',
      children: selectData(),
    },
    {
      label: 'Business sub activity',
      children: selectData(),
    },
    {
      label: 'Tesco audit approval',
      children: selectData(),
    },
    {
      label: 'Approved for activity',
      children: selectData(),
    },
    {
      label: 'Product type',
      children: selectData(),
    },
    {
      label: 'In country PMO',
      children: selectData(),
    },
    {
      label: 'Compliant level',
      children: selectData(),
    },
  ];
  return (
    <PageWrapper gap={4}>
      <Header />
      <Container gap={3} sidePadding='tight'>
        <div tw='lg:flex justify-between space-x-2'>
          <Text
            typeStyle='title2'
            leading='tight'
            color='primaryBrand'
            tag='h1'
            tw='whitespace-nowrap'
          >
            Supplier manager
          </Text>

          <PillNav />
        </div>

        <Tile>
          <div tw='space-y-3'>
            <div tw='flex gap-3 flex-wrap'>
              {selectItems.map((item, i) => {
                return (
                  <div tw='flex-basis[152px] flex-shrink-0'>
                    <SelectMenu id={`selectitem-${i}`} label={item.label}>
                      {item.children}
                    </SelectMenu>
                  </div>
                );
              })}
            </div>
            <div tw='flex gap-2'>
              <Button
                onClick={() => {
                  return false;
                }}
              >
                Filter
              </Button>
              <Button
                onClick={() => {
                  return false;
                }}
                type='secondary'
              >
                Clear filters
              </Button>
            </div>
          </div>
        </Tile>

        <Tile spaceY={2}>
          <Text typeStyle='title3' color='primaryBrand'>
            Table goes here
          </Text>
          <div tw='md:flex gap-3'>
            <div tw='flex-1'>
              Curabitur est gravida et libero vitae dictum. Ullamco laboris nisi
              ut aliquid ex ea commodi consequat. A communi observantia non est
              recedendum. Salutantibus vitae elit libero, a pharetra augue. Non
              equidem invideo, miror magis posuere velit aliquet. Cras mattis
              iudicium purus sit amet fermentum. Contra legem facit qui id facit
              quod lex prohibet. Plura mihi bona sunt, inclinet, amari petere
              vellent. At nos hinc posthac, sitientis piros Afros.
            </div>
            <div tw='flex-1'>
              Curabitur est gravida et libero vitae dictum. Ullamco laboris nisi
              ut aliquid ex ea commodi consequat. A communi observantia non est
              recedendum. Salutantibus vitae elit libero, a pharetra augue. Non
              equidem invideo, miror magis posuere velit aliquet. Cras mattis
              iudicium purus sit amet fermentum. Contra legem facit qui id facit
              quod lex prohibet. Plura mihi bona sunt, inclinet, amari petere
              vellent. At nos hinc posthac, sitientis piros Afros.
            </div>
            <div tw='flex-1'>
              Curabitur est gravida et libero vitae dictum. Ullamco laboris nisi
              ut aliquid ex ea commodi consequat. A communi observantia non est
              recedendum. Salutantibus vitae elit libero, a pharetra augue. Non
              equidem invideo, miror magis posuere velit aliquet. Cras mattis
              iudicium purus sit amet fermentum. Contra legem facit qui id facit
              quod lex prohibet. Plura mihi bona sunt, inclinet, amari petere
              vellent. At nos hinc posthac, sitientis piros Afros.
            </div>
          </div>
        </Tile>
      </Container>
    </PageWrapper>
  );
}
