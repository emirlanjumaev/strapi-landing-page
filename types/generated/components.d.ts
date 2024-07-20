import type { Schema, Attribute } from '@strapi/strapi';

export interface SeoMetaData extends Schema.Component {
  collectionName: 'components_seo_meta_data';
  info: {
    displayName: 'Meta Data';
  };
  attributes: {
    metaTitle: Attribute.String;
    metaDescription: Attribute.Text;
    metaImage: Attribute.Media<'images'> & Attribute.Required;
  };
}

export interface ElementsPriceCard extends Schema.Component {
  collectionName: 'components_elements_price_cards';
  info: {
    displayName: 'PriceCard';
    description: '';
  };
  attributes: {
    tarif_name: Attribute.String & Attribute.Required;
    price: Attribute.String & Attribute.Required;
    isSelect: Attribute.Boolean & Attribute.DefaultTo<false>;
    button_link: Attribute.Component<'elements.button-link'>;
    services: Attribute.Relation<
      'elements.price-card',
      'oneToMany',
      'api::service.service'
    >;
  };
}

export interface ElementsInput extends Schema.Component {
  collectionName: 'components_elements_inputs';
  info: {
    displayName: 'Input';
  };
  attributes: {
    placeholder: Attribute.String;
    label: Attribute.String;
    type: Attribute.Enumeration<
      ['text', 'number', 'email', 'password', 'date', 'datetime', 'checkbox']
    >;
  };
}

export interface ElementsForm extends Schema.Component {
  collectionName: 'components_elements_forms';
  info: {
    displayName: 'Form';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    input: Attribute.Component<'elements.input', true>;
    button: Attribute.Component<'elements.button-link'>;
  };
}

export interface ElementsCard extends Schema.Component {
  collectionName: 'components_elements_cards';
  info: {
    displayName: 'Card';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text;
    icon: Attribute.Media<'images'> & Attribute.Required;
  };
}

export interface ElementsButtonLink extends Schema.Component {
  collectionName: 'components_elements_button_links';
  info: {
    displayName: 'Button Link';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    url: Attribute.String & Attribute.Required;
    isExternal: Attribute.Boolean & Attribute.DefaultTo<false>;
    type: Attribute.Enumeration<['primary', 'secondary']>;
  };
}

export interface BlocksTarifs extends Schema.Component {
  collectionName: 'components_blocks_tarifs';
  info: {
    displayName: 'Tarifs';
  };
  attributes: {
    title: Attribute.String;
    plan_tarifs: Attribute.Component<'elements.price-card', true>;
  };
}

export interface BlocksHero extends Schema.Component {
  collectionName: 'components_blocks_heroes';
  info: {
    displayName: 'Hero';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text;
    link: Attribute.Component<'elements.button-link'>;
    image: Attribute.Media<'images' | 'videos'> & Attribute.Required;
  };
}

export interface BlocksFeedback extends Schema.Component {
  collectionName: 'components_blocks_feedbacks';
  info: {
    displayName: 'Feedback';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    form: Attribute.Component<'elements.form'>;
  };
}

export interface BlocksAdvantages extends Schema.Component {
  collectionName: 'components_blocks_advantages';
  info: {
    displayName: 'Advantages';
    icon: 'lightbulb';
    description: '';
  };
  attributes: {
    items: Attribute.Component<'elements.card', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'seo.meta-data': SeoMetaData;
      'elements.price-card': ElementsPriceCard;
      'elements.input': ElementsInput;
      'elements.form': ElementsForm;
      'elements.card': ElementsCard;
      'elements.button-link': ElementsButtonLink;
      'blocks.tarifs': BlocksTarifs;
      'blocks.hero': BlocksHero;
      'blocks.feedback': BlocksFeedback;
      'blocks.advantages': BlocksAdvantages;
    }
  }
}
