import {
  Frame,
  ContextualSaveBar,
  Layout,
  Card,
  Page,
  Checkbox,
  Tabs,
} from "@shopify/polaris";
import "./Home.scss";
import HeaderCard from "./components/HeaderCard/HeaderCard";
import { useState, useCallback } from "react";
import _, { clone, set } from "lodash";
import InputType from "./components/InputType";
import { tabs } from "../../constant";
import { useSelector, useDispatch } from "react-redux";
import {
  updateIsShowSaveBar,
  updateListSchema,
} from "../../store/modules/setting/actions";
function Home() {
  const [selected, setSelected] = useState(0);
  const listSchema = useSelector((state) => state.setting.listSchema);
  const isShowSaveBar = useSelector((state) => state.setting.isShowSaveBar);
  const dispatch = useDispatch();
  const handleTabChange = useCallback(
    (selectedTabIndex) => setSelected(selectedTabIndex),
    []
  );
  const [listSetting, setListSetting] = useState(_.cloneDeep(listSchema));
  const handleChangeValueInput = (indexSection, indexInput, value, type) => {
    dispatch(updateIsShowSaveBar(true));
    let isInvalid = value === "";
    let settings = _.cloneDeep(listSetting);
    if (type === "subcheckbox") {
      settings[indexSection].contents[indexInput].checkbox.value = value;
    } else if (type === "textWidget") {
      settings[indexSection].tabs[selected].contents[indexInput].value = value;

      settings[indexSection].tabs[selected].contents[indexInput].isInvalid =
        isInvalid;
    } else {
      settings[indexSection].contents[indexInput].value = value;
      settings[indexSection].contents[indexInput].isInvalid = isInvalid;
    }
    setListSetting(settings);
  };
  const handleSaveAction = () => {
    dispatch(updateIsShowSaveBar(false));
    dispatch(updateListSchema(listSetting));
    let payload = listSetting.map((setting) => {
      let cloneSetting = {};
      cloneSetting.type = setting.type;
      if (setting.type === "textWidget") {
        cloneSetting.listTab = setting.tabs.map((tab, index) => {
          let cloneTab = {};
          cloneTab.key = tab.key;
          cloneTab.listInput = tab.contents.map((content) => {
            return { key: content.key, value: content.value };
          });
          return cloneTab;
        });
      } else {
        cloneSetting.listInput = setting.contents.map((content) => {
          if (content.isHaveCheckbox)
            return {
              key: content.key,
              value: content.value,
              checkbox: { value: content.checkbox.value },
            };
          return {
            key: content.key,
            value: content.value,
          };
        });
      }
      return cloneSetting;
    });
    console.log(payload);
  };
  const handleDiscard = () => {
    setListSetting(listSchema);
    dispatch(updateIsShowSaveBar(false));
  };
  const handleClickIconheader = (index) => {
    let settings = _.cloneDeep(listSetting);
    settings[index].isShowContent = !settings[index].isShowContent;
    setListSetting(settings);
  };
  return (
    <div className="home-page">
      <Frame>
        {isShowSaveBar ? (
          <ContextualSaveBar
            message="Unsaved changes"
            fullWidth={true}
            saveAction={{
              onAction: () => handleSaveAction(),
              loading: false,
              disabled: false,
            }}
            discardAction={{
              onAction: () => handleDiscard(),
            }}
          />
        ) : (
          <></>
        )}

        <Page>
          <div className="mt-20 mb-20">
            <div className="mb-2 font-semibold text-lg">Widget Setting</div>
            <Layout>
              <Layout.Section>
                {listSetting.map((setting, indexSetting) => {
                  return (
                    <Card key={indexSetting} sectioned>
                      <HeaderCard
                        text={setting.text}
                        icon={setting.icon}
                        isShowContent={setting.isShowContent}
                        onClickIcon={() => {
                          handleClickIconheader(indexSetting);
                        }}
                      ></HeaderCard>
                      {setting.type === "position" && setting.isShowContent ? (
                        <div>
                          {setting.contents.map((content, indexContent) => {
                            return (
                              <div key={content.key}>
                                <Checkbox
                                  label={content.text}
                                  checked={content.value}
                                  onChange={(value) =>
                                    handleChangeValueInput(
                                      indexSetting,
                                      indexContent,
                                      value
                                    )
                                  }
                                />
                              </div>
                            );
                          })}
                        </div>
                      ) : (
                        <></>
                      )}
                      {setting.type === "apprearance" &&
                      setting.isShowContent ? (
                        <div className="flex flex-wrap gap-x-8 gap-y-3">
                          {setting.contents.map((content, indexContent) => {
                            return (
                              <div
                                className="apprearance-input"
                                key={indexContent}
                              >
                                <InputType
                                  options={content.options}
                                  value={content.value}
                                  text={content.text}
                                  onChange={(value) =>
                                    handleChangeValueInput(
                                      indexSetting,
                                      indexContent,
                                      value
                                    )
                                  }
                                  type={content.type}
                                  isHaveCheckbox={content.isHaveCheckbox}
                                  checkbox={content.checkbox}
                                  onChangeSubCheckbox={(value) =>
                                    handleChangeValueInput(
                                      indexSetting,
                                      indexContent,
                                      value,
                                      "subcheckbox"
                                    )
                                  }
                                  isInvalid={content.isInvalid}
                                ></InputType>
                              </div>
                            );
                          })}
                        </div>
                      ) : (
                        <></>
                      )}
                      {setting.type === "textWidget" &&
                      setting.isShowContent ? (
                        <Tabs
                          tabs={tabs}
                          selected={selected}
                          onSelect={handleTabChange}
                          fitted
                        >
                          <div>
                            {setting.tabs[selected].contents.map(
                              (content, indexContent) => {
                                return (
                                  <div className="mt-4" key={indexContent}>
                                    <InputType
                                      type={content.type}
                                      value={content.value}
                                      onChange={(value) =>
                                        handleChangeValueInput(
                                          indexSetting,
                                          indexContent,
                                          value,
                                          "textWidget"
                                        )
                                      }
                                      text={content.text}
                                      placeholder={content.placeholder}
                                      isInvalid={content.isInvalid}
                                    ></InputType>
                                  </div>
                                );
                              }
                            )}
                          </div>
                        </Tabs>
                      ) : (
                        <></>
                      )}
                    </Card>
                  );
                })}
              </Layout.Section>
            </Layout>
          </div>
        </Page>
      </Frame>
    </div>
  );
}

export default Home;
