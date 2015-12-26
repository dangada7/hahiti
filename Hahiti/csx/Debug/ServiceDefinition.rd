<?xml version="1.0" encoding="utf-8"?>
<serviceModel xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" name="Hahiti" generation="1" functional="0" release="0" Id="a436f0c5-fef1-4ab4-ae1e-c0a0ec2d31d5" dslVersion="1.2.0.0" xmlns="http://schemas.microsoft.com/dsltools/RDSM">
  <groups>
    <group name="HahitiGroup" generation="1" functional="0" release="0">
      <componentports>
        <inPort name="REST API:Endpoint1" protocol="http">
          <inToChannel>
            <lBChannelMoniker name="/Hahiti/HahitiGroup/LB:REST API:Endpoint1" />
          </inToChannel>
        </inPort>
      </componentports>
      <settings>
        <aCS name="Notifications Manager:Microsoft.WindowsAzure.Plugins.Diagnostics.ConnectionString" defaultValue="">
          <maps>
            <mapMoniker name="/Hahiti/HahitiGroup/MapNotifications Manager:Microsoft.WindowsAzure.Plugins.Diagnostics.ConnectionString" />
          </maps>
        </aCS>
        <aCS name="Notifications ManagerInstances" defaultValue="[1,1,1]">
          <maps>
            <mapMoniker name="/Hahiti/HahitiGroup/MapNotifications ManagerInstances" />
          </maps>
        </aCS>
        <aCS name="Report Analyzer:Microsoft.WindowsAzure.Plugins.Diagnostics.ConnectionString" defaultValue="">
          <maps>
            <mapMoniker name="/Hahiti/HahitiGroup/MapReport Analyzer:Microsoft.WindowsAzure.Plugins.Diagnostics.ConnectionString" />
          </maps>
        </aCS>
        <aCS name="Report AnalyzerInstances" defaultValue="[1,1,1]">
          <maps>
            <mapMoniker name="/Hahiti/HahitiGroup/MapReport AnalyzerInstances" />
          </maps>
        </aCS>
        <aCS name="REST API:Microsoft.WindowsAzure.Plugins.Diagnostics.ConnectionString" defaultValue="">
          <maps>
            <mapMoniker name="/Hahiti/HahitiGroup/MapREST API:Microsoft.WindowsAzure.Plugins.Diagnostics.ConnectionString" />
          </maps>
        </aCS>
        <aCS name="REST APIInstances" defaultValue="[1,1,1]">
          <maps>
            <mapMoniker name="/Hahiti/HahitiGroup/MapREST APIInstances" />
          </maps>
        </aCS>
        <aCS name="Statistics Collector:Microsoft.WindowsAzure.Plugins.Diagnostics.ConnectionString" defaultValue="">
          <maps>
            <mapMoniker name="/Hahiti/HahitiGroup/MapStatistics Collector:Microsoft.WindowsAzure.Plugins.Diagnostics.ConnectionString" />
          </maps>
        </aCS>
        <aCS name="Statistics CollectorInstances" defaultValue="[1,1,1]">
          <maps>
            <mapMoniker name="/Hahiti/HahitiGroup/MapStatistics CollectorInstances" />
          </maps>
        </aCS>
      </settings>
      <channels>
        <lBChannel name="LB:REST API:Endpoint1">
          <toPorts>
            <inPortMoniker name="/Hahiti/HahitiGroup/REST API/Endpoint1" />
          </toPorts>
        </lBChannel>
      </channels>
      <maps>
        <map name="MapNotifications Manager:Microsoft.WindowsAzure.Plugins.Diagnostics.ConnectionString" kind="Identity">
          <setting>
            <aCSMoniker name="/Hahiti/HahitiGroup/Notifications Manager/Microsoft.WindowsAzure.Plugins.Diagnostics.ConnectionString" />
          </setting>
        </map>
        <map name="MapNotifications ManagerInstances" kind="Identity">
          <setting>
            <sCSPolicyIDMoniker name="/Hahiti/HahitiGroup/Notifications ManagerInstances" />
          </setting>
        </map>
        <map name="MapReport Analyzer:Microsoft.WindowsAzure.Plugins.Diagnostics.ConnectionString" kind="Identity">
          <setting>
            <aCSMoniker name="/Hahiti/HahitiGroup/Report Analyzer/Microsoft.WindowsAzure.Plugins.Diagnostics.ConnectionString" />
          </setting>
        </map>
        <map name="MapReport AnalyzerInstances" kind="Identity">
          <setting>
            <sCSPolicyIDMoniker name="/Hahiti/HahitiGroup/Report AnalyzerInstances" />
          </setting>
        </map>
        <map name="MapREST API:Microsoft.WindowsAzure.Plugins.Diagnostics.ConnectionString" kind="Identity">
          <setting>
            <aCSMoniker name="/Hahiti/HahitiGroup/REST API/Microsoft.WindowsAzure.Plugins.Diagnostics.ConnectionString" />
          </setting>
        </map>
        <map name="MapREST APIInstances" kind="Identity">
          <setting>
            <sCSPolicyIDMoniker name="/Hahiti/HahitiGroup/REST APIInstances" />
          </setting>
        </map>
        <map name="MapStatistics Collector:Microsoft.WindowsAzure.Plugins.Diagnostics.ConnectionString" kind="Identity">
          <setting>
            <aCSMoniker name="/Hahiti/HahitiGroup/Statistics Collector/Microsoft.WindowsAzure.Plugins.Diagnostics.ConnectionString" />
          </setting>
        </map>
        <map name="MapStatistics CollectorInstances" kind="Identity">
          <setting>
            <sCSPolicyIDMoniker name="/Hahiti/HahitiGroup/Statistics CollectorInstances" />
          </setting>
        </map>
      </maps>
      <components>
        <groupHascomponents>
          <role name="Notifications Manager" generation="1" functional="0" release="0" software="C:\Users\victor\Source\Repos\Hahiti\Hahiti\csx\Debug\roles\Notifications Manager" entryPoint="base\x64\WaHostBootstrapper.exe" parameters="base\x64\WaWorkerHost.exe " memIndex="-1" hostingEnvironment="consoleroleadmin" hostingEnvironmentVersion="2">
            <settings>
              <aCS name="Microsoft.WindowsAzure.Plugins.Diagnostics.ConnectionString" defaultValue="" />
              <aCS name="__ModelData" defaultValue="&lt;m role=&quot;Notifications Manager&quot; xmlns=&quot;urn:azure:m:v1&quot;&gt;&lt;r name=&quot;Notifications Manager&quot; /&gt;&lt;r name=&quot;Report Analyzer&quot; /&gt;&lt;r name=&quot;REST API&quot;&gt;&lt;e name=&quot;Endpoint1&quot; /&gt;&lt;/r&gt;&lt;r name=&quot;Statistics Collector&quot; /&gt;&lt;/m&gt;" />
            </settings>
            <resourcereferences>
              <resourceReference name="DiagnosticStore" defaultAmount="[4096,4096,4096]" defaultSticky="true" kind="Directory" />
              <resourceReference name="EventStore" defaultAmount="[1000,1000,1000]" defaultSticky="false" kind="LogStore" />
            </resourcereferences>
          </role>
          <sCSPolicy>
            <sCSPolicyIDMoniker name="/Hahiti/HahitiGroup/Notifications ManagerInstances" />
            <sCSPolicyUpdateDomainMoniker name="/Hahiti/HahitiGroup/Notifications ManagerUpgradeDomains" />
            <sCSPolicyFaultDomainMoniker name="/Hahiti/HahitiGroup/Notifications ManagerFaultDomains" />
          </sCSPolicy>
        </groupHascomponents>
        <groupHascomponents>
          <role name="Report Analyzer" generation="1" functional="0" release="0" software="C:\Users\victor\Source\Repos\Hahiti\Hahiti\csx\Debug\roles\Report Analyzer" entryPoint="base\x64\WaHostBootstrapper.exe" parameters="base\x64\WaWorkerHost.exe " memIndex="-1" hostingEnvironment="consoleroleadmin" hostingEnvironmentVersion="2">
            <settings>
              <aCS name="Microsoft.WindowsAzure.Plugins.Diagnostics.ConnectionString" defaultValue="" />
              <aCS name="__ModelData" defaultValue="&lt;m role=&quot;Report Analyzer&quot; xmlns=&quot;urn:azure:m:v1&quot;&gt;&lt;r name=&quot;Notifications Manager&quot; /&gt;&lt;r name=&quot;Report Analyzer&quot; /&gt;&lt;r name=&quot;REST API&quot;&gt;&lt;e name=&quot;Endpoint1&quot; /&gt;&lt;/r&gt;&lt;r name=&quot;Statistics Collector&quot; /&gt;&lt;/m&gt;" />
            </settings>
            <resourcereferences>
              <resourceReference name="DiagnosticStore" defaultAmount="[4096,4096,4096]" defaultSticky="true" kind="Directory" />
              <resourceReference name="EventStore" defaultAmount="[1000,1000,1000]" defaultSticky="false" kind="LogStore" />
            </resourcereferences>
          </role>
          <sCSPolicy>
            <sCSPolicyIDMoniker name="/Hahiti/HahitiGroup/Report AnalyzerInstances" />
            <sCSPolicyUpdateDomainMoniker name="/Hahiti/HahitiGroup/Report AnalyzerUpgradeDomains" />
            <sCSPolicyFaultDomainMoniker name="/Hahiti/HahitiGroup/Report AnalyzerFaultDomains" />
          </sCSPolicy>
        </groupHascomponents>
        <groupHascomponents>
          <role name="REST API" generation="1" functional="0" release="0" software="C:\Users\victor\Source\Repos\Hahiti\Hahiti\csx\Debug\roles\REST API" entryPoint="base\x64\WaHostBootstrapper.exe" parameters="base\x64\WaIISHost.exe " memIndex="-1" hostingEnvironment="frontendadmin" hostingEnvironmentVersion="2">
            <componentports>
              <inPort name="Endpoint1" protocol="http" portRanges="80" />
            </componentports>
            <settings>
              <aCS name="Microsoft.WindowsAzure.Plugins.Diagnostics.ConnectionString" defaultValue="" />
              <aCS name="__ModelData" defaultValue="&lt;m role=&quot;REST API&quot; xmlns=&quot;urn:azure:m:v1&quot;&gt;&lt;r name=&quot;Notifications Manager&quot; /&gt;&lt;r name=&quot;Report Analyzer&quot; /&gt;&lt;r name=&quot;REST API&quot;&gt;&lt;e name=&quot;Endpoint1&quot; /&gt;&lt;/r&gt;&lt;r name=&quot;Statistics Collector&quot; /&gt;&lt;/m&gt;" />
            </settings>
            <resourcereferences>
              <resourceReference name="DiagnosticStore" defaultAmount="[4096,4096,4096]" defaultSticky="true" kind="Directory" />
              <resourceReference name="EventStore" defaultAmount="[1000,1000,1000]" defaultSticky="false" kind="LogStore" />
            </resourcereferences>
          </role>
          <sCSPolicy>
            <sCSPolicyIDMoniker name="/Hahiti/HahitiGroup/REST APIInstances" />
            <sCSPolicyUpdateDomainMoniker name="/Hahiti/HahitiGroup/REST APIUpgradeDomains" />
            <sCSPolicyFaultDomainMoniker name="/Hahiti/HahitiGroup/REST APIFaultDomains" />
          </sCSPolicy>
        </groupHascomponents>
        <groupHascomponents>
          <role name="Statistics Collector" generation="1" functional="0" release="0" software="C:\Users\victor\Source\Repos\Hahiti\Hahiti\csx\Debug\roles\Statistics Collector" entryPoint="base\x64\WaHostBootstrapper.exe" parameters="base\x64\WaWorkerHost.exe " memIndex="-1" hostingEnvironment="consoleroleadmin" hostingEnvironmentVersion="2">
            <settings>
              <aCS name="Microsoft.WindowsAzure.Plugins.Diagnostics.ConnectionString" defaultValue="" />
              <aCS name="__ModelData" defaultValue="&lt;m role=&quot;Statistics Collector&quot; xmlns=&quot;urn:azure:m:v1&quot;&gt;&lt;r name=&quot;Notifications Manager&quot; /&gt;&lt;r name=&quot;Report Analyzer&quot; /&gt;&lt;r name=&quot;REST API&quot;&gt;&lt;e name=&quot;Endpoint1&quot; /&gt;&lt;/r&gt;&lt;r name=&quot;Statistics Collector&quot; /&gt;&lt;/m&gt;" />
            </settings>
            <resourcereferences>
              <resourceReference name="DiagnosticStore" defaultAmount="[4096,4096,4096]" defaultSticky="true" kind="Directory" />
              <resourceReference name="EventStore" defaultAmount="[1000,1000,1000]" defaultSticky="false" kind="LogStore" />
            </resourcereferences>
          </role>
          <sCSPolicy>
            <sCSPolicyIDMoniker name="/Hahiti/HahitiGroup/Statistics CollectorInstances" />
            <sCSPolicyUpdateDomainMoniker name="/Hahiti/HahitiGroup/Statistics CollectorUpgradeDomains" />
            <sCSPolicyFaultDomainMoniker name="/Hahiti/HahitiGroup/Statistics CollectorFaultDomains" />
          </sCSPolicy>
        </groupHascomponents>
      </components>
      <sCSPolicy>
        <sCSPolicyUpdateDomain name="REST APIUpgradeDomains" defaultPolicy="[5,5,5]" />
        <sCSPolicyUpdateDomain name="Statistics CollectorUpgradeDomains" defaultPolicy="[5,5,5]" />
        <sCSPolicyUpdateDomain name="Report AnalyzerUpgradeDomains" defaultPolicy="[5,5,5]" />
        <sCSPolicyUpdateDomain name="Notifications ManagerUpgradeDomains" defaultPolicy="[5,5,5]" />
        <sCSPolicyFaultDomain name="Notifications ManagerFaultDomains" defaultPolicy="[2,2,2]" />
        <sCSPolicyFaultDomain name="Report AnalyzerFaultDomains" defaultPolicy="[2,2,2]" />
        <sCSPolicyFaultDomain name="REST APIFaultDomains" defaultPolicy="[2,2,2]" />
        <sCSPolicyFaultDomain name="Statistics CollectorFaultDomains" defaultPolicy="[2,2,2]" />
        <sCSPolicyID name="Notifications ManagerInstances" defaultPolicy="[1,1,1]" />
        <sCSPolicyID name="Report AnalyzerInstances" defaultPolicy="[1,1,1]" />
        <sCSPolicyID name="REST APIInstances" defaultPolicy="[1,1,1]" />
        <sCSPolicyID name="Statistics CollectorInstances" defaultPolicy="[1,1,1]" />
      </sCSPolicy>
    </group>
  </groups>
  <implements>
    <implementation Id="d6a04b80-886b-4238-b47b-63cd8d29f083" ref="Microsoft.RedDog.Contract\ServiceContract\HahitiContract@ServiceDefinition">
      <interfacereferences>
        <interfaceReference Id="ca0172ba-b224-4117-b812-95a4e8f18963" ref="Microsoft.RedDog.Contract\Interface\REST API:Endpoint1@ServiceDefinition">
          <inPort>
            <inPortMoniker name="/Hahiti/HahitiGroup/REST API:Endpoint1" />
          </inPort>
        </interfaceReference>
      </interfacereferences>
    </implementation>
  </implements>
</serviceModel>